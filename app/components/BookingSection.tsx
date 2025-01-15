"use client";

import { FaRegCalendarDays } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

interface BookingSectionProps {
  onSelectDate?: (date: string) => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onSelectDate }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-[#47682C] py-8 text-center transition-opacity duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Text section */}
      <div className="mb-6">
        <div
          className={`text-xl font-bold tracking-wide mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Plan your camping with confidence
        </div>
        <div
          className={`text-sm tracking-wide font-extralight transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Find help with your bookings, and see what to expect along your
          journey.
        </div>
      </div>

      {/* Buttons and icon */}
      <div className="flex items-center justify-center space-x-10 gap-6">
        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <FaRegCalendarDays size={40} />
        </div>
        <button
          className={`bg-white text-black py-3 px-6 rounded-3xl w-[428px] transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => onSelectDate?.("2025-08-25")}
        >
          SAT, 25 AUG
        </button>
        <button
          className={`bg-white text-black py-3 px-6 rounded-3xl w-[428px] transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => onSelectDate?.("2025-08-26")}
        >
          SUN, 26 AUG
        </button>
        <button className="group relative m-1 cursor-pointer overflow-hidden rounded-md border-2 border-[#74FF00] px-6 py-3 font-mono font-semibold">
          <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-[#74FF00] transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
          <span className="ease relative text-[#74FF00] transition duration-300 group-hover:text-white">
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
