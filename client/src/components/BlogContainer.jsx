import React from "react";
import Blog from "./Blog";

export default function BlogContainer() {
  return (
    <div className="mx-auto mt-20 w-11/12 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
}
