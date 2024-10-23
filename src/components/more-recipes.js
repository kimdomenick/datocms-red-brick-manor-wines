import React from "react";
import RecipePreview from "./recipe-preview";

export default function MoreRecipes({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <RecipePreview
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
