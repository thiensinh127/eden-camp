"use client";
import React from "react";
import Slider from "react-slick";
import Image1 from "@/public/images/background1.png";
import Image2 from "@/public/images/background2.png";
import Image3 from "@/public/images/background3.png";
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
    customPaging: () => <div className="w-4 h-4 bg-white rounded-full mx-1" />,
  };

  const images = [
    { src: Image1, alt: "Campfire" },
    { src: Image2, alt: "Tent" },
    { src: Image3, alt: "Forest" },
  ];

  return (
    <section className="relative bg-gray-900 text-white ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
        <h1 className="text-4xl font-bold mb-4">
          Plan Your Camping with Confidence
        </h1>
        <p className="text-lg mb-6">
          Find help with your bookings, and see what to expect along your
          journey.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded">
          Book Now
        </button>
      </div> */}
    </section>
  );
};

export default HeroSection;
