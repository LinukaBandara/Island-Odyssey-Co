"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function LazyImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="absolute inset-0 skeleton" aria-hidden />}
      <Image
        {...props}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${props.className ?? ""} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
