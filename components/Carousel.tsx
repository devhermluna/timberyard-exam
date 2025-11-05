"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Author, SanityImage, SanitySlug } from "../interfaces/Sanity";
import ImageText from "./ImageText";
import clsx from "clsx";

interface Slide {
  mainImage: SanityImage;
  title: string;
  author: Author;
  slug: SanitySlug;
}

interface Props {
  slides: Slide[];
  className?: string;
}

const Carousel = ({ slides, className }: Props) => {
  return (
    <div className={clsx('rounded-xl overflow-hidden', className)}>
      <Swiper
        navigation
        loop
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide>
            <div className="h-[250px] md:h-[500px] lg:h-[700px] text-white relative">
              <ImageText title={slide.title} subtitle={slide.author.name} image={slide.mainImage} alt={slide.mainImage.alt || `Slide ${index + 1}`} slug={slide.slug} />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
