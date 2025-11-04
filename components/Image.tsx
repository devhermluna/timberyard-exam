"use client";

import { client } from "@/lib/sanity.client";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from "../interfaces/Sanity";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
  return builder.image(source);
}

interface Props {
  src: SanityImage;
  alt: string;
  className?: string;
}

export default function Image({
  src,
  alt,
  className = "w-full h-auto rounded-xl",
}: Props) {
  return <img src={urlFor(src).url()} alt={alt} className={className} />;
}
