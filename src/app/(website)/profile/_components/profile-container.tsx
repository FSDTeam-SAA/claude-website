"use client"

import { useSession } from "next-auth/react"
import { useQuery } from "@tanstack/react-query"
import ProfilePicture from "./profile-picture"
import PersonalInformationForm from "./personal-information-form"
import { UserProfileApiResponse } from "./user-data-type"
import VideoUpload from "./video-upload"
import ProfileSettingSkeleton from "./personal-info-page-skeleton"

const ProfileContainer = () => {
  const { data: session } = useSession()
  const token = (session?.user as { accessToken?: string })?.accessToken

  const { data, isLoading } = useQuery<UserProfileApiResponse>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
          cache: "no-store",
        }
      )
      return res.json()
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })

  if (isLoading) {
    return (
      <div className="pt-6">
        <ProfileSettingSkeleton />
      </div>
    )
  }

  const user = data?.data?.user
  const hasProfileImage = !!user?.profileImage

  return (
    <div className="py-8 md:py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
        <div className="md:col-span-1 border border-[#E7E7E7] rounded-[16px] p-6">
          <ProfilePicture user={user} />
          <VideoUpload videos={user?.playingVideo || []} />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-[28px] lg:text-[32px] text-[#131313] font-normal">
            Profile Setting
          </h1>

          {!hasProfileImage && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              Profile image mandatory. Please upload your profile image first.
            </div>
          )}

          <div className="mt-6">
            <PersonalInformationForm user={user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer




















// "use client"

// import { useSession } from "next-auth/react"
// import { useQuery } from "@tanstack/react-query"
// import ProfilePicture from "./profile-picture"
// import PersonalInformationForm from "./personal-information-form"
// import { UserProfileApiResponse } from "./user-data-type"
// import VideoUpload from "./video-upload"
// import ProfileSettingSkeleton from "./personal-info-page-skeleton"

// const ProfileContainer = () => {
//   const { data: session } = useSession()
//   const token = (session?.user as { accessToken?: string })?.accessToken

//   const { data, isLoading } = useQuery<UserProfileApiResponse>({
//     queryKey: ["user-profile"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       )
//       return res.json()
//     },
//     enabled: !!token,
//     staleTime: 1000 * 60 * 5,
//   })
  
//   // loading 
//   if (isLoading) {
//     return <div className="pt-6">
//       <ProfileSettingSkeleton/>
//     </div>
//   }

//   const user = data?.data?.user
//   // console.log(data)

//   return (
//     <div className="py-8 md:py-12 lg:py-16">
//       <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
//         <div className="md:col-span-1 border border-[#E7E7E7] rounded-[16px] p-6">
//           <ProfilePicture user={user} />
//           <VideoUpload videos={user?.playingVideo || []} />
//         </div>

//         <div className="md:col-span-2">
//           <h1 className="text-2xl md:text-[28px] lg:text-[32px] text-[#131313] font-normal">
//             Profile Setting
//           </h1>
//           <PersonalInformationForm user={user} />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProfileContainer





