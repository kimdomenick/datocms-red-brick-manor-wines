import React from "react";
import Container from "./container";
import Menu from "./menu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-4">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            WHY
          </h3>
          <p>Because we love open source. And wine.</p>
        </div>
        <Menu justify="justify-end" />
        <div
          className="flex flex-row justify-end mt-2"
          style={{ fontSize: "75%" }}
        >
          <p>
            Copyright {currentYear}, Red Brick Manor Wines. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
