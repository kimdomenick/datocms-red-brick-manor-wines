import React from "react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
        Wine Blog
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A hobby site dedicated to the misadventures of making homemade wine
      </h4>
    </section>
  );
}
