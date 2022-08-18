import type Class from '@/lib/types/Class';
import type { FC } from 'react';

const ClassPosts: FC<{ posts: Class['posts'] }> = function ClassPosts({ posts }) {
  return (
    <div className="flex flex-row flex-wrap w-full md:w-3/4 lg:w-1/2 justify-start align-top m-auto">
      <h1 className="text-3xl font-bold text-center">
        Posts:
      </h1>
      {posts.map((post, index) => (
        <div key={index} className="mt-3 border-2 border-gray-300 w-full p-5 rounded-md">
          <h3 className="text-2xl">{post.title}</h3>
          <p className="text-lg">{post.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassPosts;
