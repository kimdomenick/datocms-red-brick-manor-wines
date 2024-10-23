import React from "react";

export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mt-16 mb-16 md:mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
