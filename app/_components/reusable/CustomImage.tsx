import Image from "next/image";
import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  layout?: "fixed" | "fill" | "responsive" | "intrinsic";
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function CustomImage({
  src,
  alt,
  width = 100,
  height = 100,
  loading = "lazy",
  layout = "responsive",
  className = "",
  priority = false,
  quality = 75,
  objectFit = "cover",
  ...props
}: CustomImageProps) {
  const shimmer = (w: number, h: number): string => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="20%" />
          <stop stop-color="#edeef1" offset="50%" />
          <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f6f7f8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
    </svg>`;

  const toBase64 = (str: string): string =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      layout={layout}
      className={className}
      priority={priority}
      quality={quality}
      objectFit={objectFit}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      {...props}
    />
  );
}
