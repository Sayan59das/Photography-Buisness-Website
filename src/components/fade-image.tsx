"use client"

import * as React from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

/** Wraps next/image with a soft fade-in once the image finishes loading, instead of popping in abruptly. */
export function FadeImage({ className, alt, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <Image
      {...props}
      alt={alt}
      className={cn(
        "transition-opacity duration-700 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
    />
  )
}
