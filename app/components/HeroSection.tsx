"use client";
import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import Image1 from "@/public/images/camp1.jpg";
import Image2 from "@/public/images/camp2.jpg";
import Image3 from "@/public/images/camp3.jpg";
import Image4 from "@/public/images/camp4.jpg";
import Image5 from "@/public/images/camp5.jpg";

import Image from "next/image";

const HeroSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: () => {
      return <div className="w-4 h-4 rounded-full mx-1" />;
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
      >
        <ul className="flex space-x-2 justify-end">{dots}</ul>
      </div>
    ),
  };

  const images = [
    { src: Image1, alt: "Campfire" },
    { src: Image2, alt: "Tent" },
    { src: Image3, alt: "Forest" },
    { src: Image4, alt: "Forest" },
    { src: Image5, alt: "Forest" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`relative bg-gray-900 text-white pt-[76px] overflow-hidden transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="focus-visible:outline-none">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full object-cover max-h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
