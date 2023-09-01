'use client';
export * from '@chakra-ui/react';

// TODO: Remove once https://github.com/vercel/next.js/issues/52216 is resolved.
// `next/image` seems to be affected by a default + named export bundling bug.
import { chakra, ChakraComponent, HTMLChakraProps, } from "@chakra-ui/react"
import NextImage, { ImageProps as NextImageProps } from "next/image"

let ResolvedImage = NextImage;
if ("default" in ResolvedImage) {
    // @ts-ignore
    ResolvedImage = (ResolvedImage as unknown as { default: typeof Image })
        .default;
}


export type ImageProps = NextImageProps &
  Omit<HTMLChakraProps<"img">, keyof NextImageProps>

const imageProps: (keyof NextImageProps)[] = [
  "src",
  "alt",
  "sizes",
  "style",
  "width",
  "height",
  "fill",
  "loader",
  "quality",
  "priority",
  "loading",
  "placeholder",
  "blurDataURL",
  "unoptimized",
  "onLoadingComplete",
  "alt",
  "crossOrigin",
  "decoding",
  "loading",
  "referrerPolicy",
  "sizes",
  "src",
  "useMap",
]

export const Image: ChakraComponent<"img", NextImageProps> = chakra(ResolvedImage, {
  shouldForwardProp: (prop) => (imageProps as string[]).includes(prop),
})