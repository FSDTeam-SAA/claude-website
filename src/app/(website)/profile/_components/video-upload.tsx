

"use client"

import { Upload, X, Loader2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

const MAX_VIDEOS = 3

export default function VideoUpload({ videos }: { videos: string[] }) {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken
  const queryClient = useQueryClient()
  const inputRef = useRef<HTMLInputElement>(null)

  const [keptExistingVideos, setKeptExistingVideos] = useState<string[]>([])
  // const [uploading, setUploading] = useState(false)

  useEffect(() => {
    setKeptExistingVideos(videos)
  }, [videos])

  // Delete video mutation (auto update)
  const deleteMutation = useMutation({
    mutationFn: async (url: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-remove`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ playingVideo: url }),
        }
      )
      return res.json()
    },
    onSuccess: (_, url) => {
      setKeptExistingVideos(prev => prev.filter(v => v !== url))
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
      toast.success("Video removed")
    },
    onError: () => toast.error("Failed to delete video"),
  })

  // Upload video mutation (auto upload)
  // const uploadMutation = useMutation({
  //   mutationFn: async (file: File) => {
  //     const formData = new FormData()
  //     formData.append("playingVideo", file)

  //     const res = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`,
  //       {
  //         method: "PUT",
  //         headers: { Authorization: `Bearer ${token}` },
  //         body: formData,
  //       }
  //     )
  //     return res.json()
  //   },
  //   onMutate: () => setUploading(true),
  //   onSuccess: (data) => {
  //     if(!data?.success){
  //       toast.error(data?.message || "Video uploaded Failed")
  //       setUploading(false)
  //       return;
  //     }
  //     toast.success(data?.message || "Video Uploaded")
  //     queryClient.invalidateQueries({ queryKey: ["user-profile"] })

  //   },
  //   // onError: () => {
  //   //   setUploading(false)
  //   //   toast.error("Upload failed")
  //   // },
  // })


  const  uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData()
      formData.append("playingVideo", file)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/video-add`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      )
      return res.json()
    },
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message || "Video upload failed")
        return
      }

      toast.success(data?.message || "Video uploaded")
      queryClient.invalidateQueries({ queryKey: ["user-profile"] })
    },
    onError: () => {
      toast.error("Upload failed")
    },
  })


const { isPending } = uploadMutation


  const handleSelectVideos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const remaining = MAX_VIDEOS - keptExistingVideos.length

    if (remaining <= 0) {
      toast.warning(`Maximum ${MAX_VIDEOS} videos allowed`)
      return
    }

    const selectedFiles = files
      .filter(f => f.type.startsWith("video/"))
      .slice(0, remaining)

    if (!selectedFiles.length) return

    // Auto-upload each video
    selectedFiles.forEach(file => uploadMutation.mutate(file))

    e.target.value = "" // reset input
  }

  return (
    <Card className="w-full p-6 space-y-5 rounded-xl mt-24">
      <h3 className="text-lg md:text-xl font-bold text-center">
        Upload your highlights videos
      </h3>

      <div
        onClick={() => inputRef.current?.click()}
        className={`border-4 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer bg-gray-50 ${isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
      >
        {isPending ? (
          <Loader2 className="w-10 h-10 mx-auto text-gray-400 mb-3 animate-spin" />
        ) : (
          <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
        )}
        <p className="font-semibold">
          {isPending ? "Uploading..." : "Click to Add Videos"}
        </p>
        <p className="font-semibold text-gray-500">
          Only 3 videos allowed
        </p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="video/*"
        multiple
        hidden
        onChange={handleSelectVideos}
        disabled={isPending}
      />

      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 mt-5">
        {keptExistingVideos.map(url => (
          <div key={url} className="relative">
            <video src={url} controls className="w-full h-24 rounded-xl" />
            <Button
              size="sm"
              variant="destructive"
              className="absolute top-2 left-2 p-1 rounded-[5px]"
              onClick={() => deleteMutation.mutate(url)}
              disabled={isPending}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

