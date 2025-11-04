"use client";

import { SanityImage } from "../interfaces/Sanity";
import Image from "./Image";
import Typography from "./Typography";

interface Props {
  image: SanityImage;
  alt: string;
  title: string;
  subtitle: string;
}

export default function ImageText({
  image,
  alt,
  title,
  subtitle,
}: Props) {
  return (
    <>
      <Image src={image} alt={alt} />
      <div className="absolute sm:bottom-12 sm:left-12 sm:right-12 z-10">
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="h6">
          {subtitle}
        </Typography>
      </div>
    </>
  );
}
