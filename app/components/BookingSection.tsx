"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import "react-datepicker/dist/react-datepicker.css";

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
}
interface BookingSectionProps {
  onSelectDate?: (date: string) => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // eslint-disable-next-line react/display-name
  const CustomInput = React.forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <button
        onClick={onClick}
        ref={ref}
        className={`bg-white text-black py-3  px-6 rounded-3xl w-full  md:w-[300px] transition-all duration-700 delay-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 "
        }`}
      >
        {value?.toUpperCase() || "Select a Date"}
      </button>
    )
  );

  return (
    <div
      ref={ref}
      className={`bg-[#47682C] py-8 text-center transition-opacity duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Text section */}
      <div className="mb-6 px-4 sm:px-6 md:px-8">
        <div
          className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-wide mb-2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Plan your camping with confidence
        </div>
        <div
          className={`text-sm md:text-base tracking-wide font-extralight transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Find help with your bookings, and see what to expect along your
          journey.
        </div>
      </div>

      {/* Buttons and icon */}
      <div className="flex flex-col md:flex-row items-center  justify-center gap-6">
        <div
          className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
        >
          <FaRegCalendarDays size={40} />
        </div>

        {/* <DatePicker
          className="mx-6"
          placeholderText="Check-in Date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="EEE, dd MMM"
          customInput={<CustomInput />}
          isClearable
             todayButton="Today"
        />

        <DatePicker
          placeholderText="Check-in Date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="EEE, dd MMM"
          customInput={<CustomInput />}
          isClearable
        /> */}
        <button
          className={`bg-white text-black py-3 px-6 rounded-3xl w-full md:w-[428px] transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => onSelectDate?.("2025-08-25")}
        >
          SAT, 25 AUG
        </button>
        <button
          className={`bg-white text-black py-3 px-6 rounded-3xl w-full md:w-[428px] transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          onClick={() => onSelectDate?.("2025-08-25")}
        >
          SAT, 25 AUG
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
