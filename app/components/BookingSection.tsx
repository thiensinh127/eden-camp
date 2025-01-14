"use client";
interface BookingSectionProps {
  onSelectDate?: (date: string) => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onSelectDate }) => {
  return (
    <div className="bg-green-600 py-8 text-center">
      <div className="flex justify-center space-x-4">
        <button
          className="bg-white text-black py-2 px-6 rounded-lg"
          onClick={() => onSelectDate?.("2025-08-25")}
        >
          SAT, 25 AUG
        </button>
        <button
          className="bg-white text-black py-2 px-6 rounded-lg"
          onClick={() => onSelectDate?.("2025-08-26")}
        >
          SUN, 26 AUG
        </button>
        <button className="bg-green-700 text-white py-2 px-6 rounded-lg">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BookingSection;
