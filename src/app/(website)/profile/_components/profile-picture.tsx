"use client"

import { CircleArrowUp } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { toast } from "sonner"
import { User } from "./user-data-type"

const DEFAULT_IMAGE = "/assets/images/no-user.jpg"

const ProfilePicture = ({ user }: { user?: User }) => {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken
  const queryClient = useQueryClient()

  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE)
  const prevImageRef = useRef<string>(DEFAULT_IMAGE)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (user?.profileImage) {
      setProfileImage(user.profileImage)
      prevImageRef.current = user.profileImage
    } else {
      setProfileImage(DEFAULT_IMAGE)
      prevImageRef.current = DEFAULT_IMAGE
    }
  }, [user?.profileImage])

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        }
      )

      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || "Upload failed")
      return data
    },
    onSuccess: async () => {
      toast.success("Profile image updated")
      // ✅ guard & profile page দুটোই same query key use করে
      await queryClient.invalidateQueries({ queryKey: ["user-profile"] })
    },
    onError: (err: Error) => {
      toast.error(err?.message || "Upload failed")
      // ❗ upload fail হলে preview revert
      setProfileImage(prevImageRef.current || DEFAULT_IMAGE)
    },
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // ✅ optimistic preview
    prevImageRef.current = profileImage
    const reader = new FileReader()
    reader.onloadend = () => setProfileImage(reader.result as string)
    reader.readAsDataURL(file)

    const formData = new FormData()
    formData.append("profileImage", file)
    mutate(formData)

    // same file re-select করতে চাইলে
    e.target.value = ""
  }

  return (
    <div className="w-full relative flex justify-center items-center ">
      <div className="relative ">
        <div className="w-32 h-32 rounded-full overflow-hidden border">
          <Image
            src={profileImage}
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full absolute flex justify-center mt-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />

          <div>
            <button
            className="w-[200px] flex items-center justify-center gap-2 rounded-[8px] border-[2px] border-primary text-primary py-2 md:py-3 px-3 disabled:opacity-60 disabled:cursor-not-allowed"
            onClick={() => fileInputRef.current?.click()}
            disabled={isPending}
            type="button"
          >
            <CircleArrowUp className="h-5 w-5" />
            {isPending ? "Uploading..." : "Upload Image"}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePicture





















// "use client"

// import { CircleArrowUp } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { useMutation, useQueryClient } from "@tanstack/react-query"
// import { useSession } from "next-auth/react"
// import { toast } from "sonner"
// import { User } from "./user-data-type"

// const ProfilePicture = ({ user }: { user?: User }) => {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken?: string })?.accessToken
//   const queryClient = useQueryClient()

//   const [profileImage, setProfileImage] = useState("/assets/images/no-user.jpg")
//   const fileInputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     if (user?.profileImage) {
//       setProfileImage(user.profileImage)
//     }
//   }, [user?.profileImage])

//   const { mutate, isPending } = useMutation({
//     mutationFn: async (formData: FormData) => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//         {
//           method: "PUT",
//           headers: { Authorization: `Bearer ${token}` },
//           body: formData,
//         }
//       )
//       return res.json()
//     },
//     onSuccess: () => {
//       toast.success("Profile image updated")
//       queryClient.invalidateQueries({ queryKey: ["user-profile"] })
//     },
//     onError: () => toast.error("Upload failed"),
//   })

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (!file) return

//     const reader = new FileReader()
//     reader.onloadend = () =>
//       setProfileImage(reader.result as string)
//     reader.readAsDataURL(file)

//     const formData = new FormData()
//     formData.append("profileImage", file)
//     mutate(formData)
//   }

//   return (
//     <div className="w-full relative flex justify-center items-center">
//       <div className="relative">
//         <div className="w-32 h-32 rounded-full overflow-hidden border">
//           <Image
//             src={profileImage}
//             alt="Profile"
//             width={128}
//             height={128}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="w-full absolute flex justify-center mt-4">
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             hidden
//             onChange={handleFileChange}
//           />

//          <div>
//              <button
//             className="w-[200px] flex items-center justify-center gap-2 rounded-[8px] border-[2px] border-primary text-primary py-2 md:py-3 px-3"
//             onClick={() => fileInputRef.current?.click()}
//             disabled={isPending}
//           >
//             <CircleArrowUp />
//             Upload Image
//           </button>
//          </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfilePicture






