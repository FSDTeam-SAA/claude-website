
import React from 'react'
import { UserProfile } from './player-data-type';
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import HighlightsVideoSkeleton from './highlights-video-skeleton';

const HighlightsVideo = ({
    data,
    isLoading,
    error,
    isError,
}: {
    data?: UserProfile
    isLoading: boolean
    error: unknown
    isError: boolean
}) => {

    if (isLoading) {
        return <div className="pb-0">
            <HighlightsVideoSkeleton />
        </div>
    }

    if (isError) {
        const message =
            error instanceof Error ? error.message : "Something went wrong!";
        return <div className="pb-8">
            <ErrorContainer message={message} />
        </div>
    }

    const videos = data?.user?.playingVideo;

    if (!videos) return null;
    console.log(videos)

      if (!videos || videos.length === 0) {
    return (
       <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
                 <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Highlights</h3>
        <p className="py-12 text-center text-white">
          No playing videos uploaded yet
        </p>
      </div>
    );   
  }
    return (
        <div className='pb-6'>
             <div className='relative container bg-cover bg-no-repeat bg-center bg-[url("/assets/profiles/pro_bg1.svg")] rounded-[16px] p-6 shadow-[0px_4px_24px_0px_#00000014]]'>
                 <div className="absolute inset-0 bg-black/20 rounded-[16px] -z-50" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-normal leading-[120%] pb-5 md:pb-6">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos?.map((videoUrl, index) => (
            <div key={`${videoUrl}-${index}`} className="space-y-3">
              <video src={videoUrl}
                controls
                preload="metadata"
                className="w-full h-full rounded-lg"
                // controlsList="nodownload"
                playsInline />
            </div>
          ))}
        </div>

            </div>
        </div>
    )
}

export default HighlightsVideo