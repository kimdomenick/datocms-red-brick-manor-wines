import React from "react";
import PostPreview from '../components/post-preview'

export default function MoreStories(props) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {props.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {props.posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post?.coverImage ? post.coverImage : null}
            date={post?.date ? post.date : null}
            author={post?.author ? post.author : null}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
