"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AlertCircle, ChevronRight, Search, UserRound, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface User {
  _id: string
  firstName: string
  lastName: string
  email?: string
  profileImage?: string
}

interface SearchBoxProps {
  baseUrl: string
}

const MIN_SEARCH_LENGTH = 2

const CircularSpinner = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-block shrink-0 animate-spin rounded-full border-2 border-primary/20 border-r-primary border-t-primary motion-reduce:animate-none ${className}`}
  />
)

const SearchBox = ({ baseUrl }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsId = useId()
  const query = searchTerm.trim()
  const canSearch = query.length >= MIN_SEARCH_LENGTH
  const showDropdown = isOpen && query.length > 0

  useEffect(() => {
    if (!canSearch) {
      setUsers([])
      setError(null)
      setIsLoading(false)
      return
    }

    const controller = new AbortController()

    setUsers([])
    setError(null)
    setIsLoading(true)

    const timer = window.setTimeout(async () => {
      try {
        const nameParts = query.split(/\s+/)
        const queryParams = new URLSearchParams({
          emailVerified: "true",
          limit: "10",
        })

        if (nameParts.length > 1) {
          queryParams.set("firstName", nameParts[0])
          queryParams.set("lastName", nameParts.slice(1).join(" "))
        } else {
          queryParams.set("searchTerm", nameParts[0])
        }

        const response = await fetch(
          `${baseUrl}/user/all-user?${queryParams.toString()}`,
          {
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
          }
        )

        if (!response.ok) throw new Error("Search failed")

        const data = await response.json()
        setUsers(Array.isArray(data?.data) ? data.data : [])
      } catch (searchError) {
        if (searchError instanceof Error && searchError.name === "AbortError") return
        setError("We couldn't complete the search. Please try again.")
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }, 350)

    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [baseUrl, canSearch, query, retryCount])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleClear = () => {
    setSearchTerm("")
    setUsers([])
    setError(null)
    setIsOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      <div
        className={`relative rounded-full border bg-white transition-all duration-200 ${
          isOpen
            ? "border-primary shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        {isLoading ? (
          <CircularSpinner className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2" />
        ) : (
          <Search className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        )}

        <Input
          ref={inputRef}
          type="search"
          role="combobox"
          aria-label="Search players"
          aria-autocomplete="list"
          aria-controls={showDropdown ? resultsId : undefined}
          aria-expanded={showDropdown}
          autoComplete="off"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setIsOpen(false)
          }}
          className="h-11 rounded-full border-0 bg-transparent pl-11 pr-11 text-sm shadow-none outline-none placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-search-cancel-button]:hidden"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          id={resultsId}
          role="listbox"
          aria-label="Player search results"
          className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
        >
          {!canSearch ? (
            <div className="flex items-center gap-3 px-4 py-4 text-sm text-gray-600">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              Type at least {MIN_SEARCH_LENGTH} characters to search.
            </div>
          ) : isLoading ? (
            <div className="flex items-center justify-center gap-2 px-4 py-8 text-sm text-gray-600">
              <CircularSpinner className="h-5 w-5" />
              Searching for players...
            </div>
          ) : error ? (
            <div className="flex flex-col items-center px-5 py-6 text-center">
              <AlertCircle className="mb-2 h-6 w-6 text-red-500" />
              <p className="text-sm text-gray-600">{error}</p>
              <button
                type="button"
                onClick={() => setRetryCount((count) => count + 1)}
                className="mt-3 text-sm font-medium text-primary hover:underline"
              >
                Try again
              </button>
            </div>
          ) : users.length > 0 ? (
            <>
              <div className="border-b border-gray-100 px-4 py-2.5">
                <p className="text-xs font-medium text-gray-500">
                  {users.length} {users.length === 1 ? "player" : "players"} found
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto overscroll-contain py-1.5">
                {users.map((user) => {
                  const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Player"

                  return (
                    <Link
                      key={user._id}
                      href={`/player-profile/${user._id}`}
                      role="option"
                      onClick={() => {
                        setIsOpen(false)
                        setSearchTerm("")
                      }}
                      className="group flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                    >
                      <Image
                        src={user.profileImage || "/assets/images/no-user.jpg"}
                        alt=""
                        width={44}
                        height={44}
                        className="h-11 w-11 shrink-0 rounded-full border border-gray-200 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900">{fullName}</p>
                        {user.email && (
                          <p className="mt-0.5 truncate text-xs text-gray-500">{user.email}</p>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  )
                })}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center px-5 py-8 text-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100">
                <UserRound className="h-5 w-5 text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-800">No players found</p>
              <p className="mt-1 text-xs text-gray-500">Try a different name or email address.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBox
