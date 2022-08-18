import type Class from '@/lib/types/Class';
import type { FC } from 'react';

const VideoPosts: FC<{ videos: Class['videos'] }> = function ClassPosts({ videos }) {
  return (
      <div className="py-3 space-y-4 flex flex-row flex-wrap w-full md:w-3/4 lg:w-1/2 justify-start align-top m-auto">

          <h1 className="text-3xl font-bold text-center">
              Videos:
          </h1>
          {videos.map((video, index) => (
              <video controls key={`video-${index}`} className="rounded-lg">
                  <source src={video} />
              </video>
          ))}
    </div>
  );
};

export default VideoPosts;
