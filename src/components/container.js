import React from "react";

export default function Container({ children }) {
  return (
    <div className="container mx-auto px-5" style={{ position: "relative" }}>
      {children}
    </div>
  );
}
