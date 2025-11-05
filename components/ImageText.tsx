"use client";

import Link from "next/link";
import { SanityImage, SanitySlug } from "../interfaces/Sanity";
import Image from "./Image";
import Typography from "./Typography";

interface Props {
  image: SanityImage;
  alt: string;
  title: string;
  subtitle: string;
  slug: SanitySlug;
}

export default function ImageText({
  image,
  alt,
  title,
  subtitle,
  slug,
}: Props) {
  return (
    <>
      <Image src={image} alt={alt} className="object-cover object-top w-full! h-full!" />
      <div className="absolute bottom-4 sm:bottom-12 left-4 sm:left-12 right-4 sm:right-12 z-10">
        <Link href={`/blogs/${slug.current}`}>
          <Typography variant="h4">
            {title}
          </Typography>
          <Typography variant="h6">
            {subtitle}
          </Typography>
        </Link>
      </div>
    </>
  );
}
