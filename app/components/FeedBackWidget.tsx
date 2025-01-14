import { CiUser } from "react-icons/ci";

const FeedbackWidget: React.FC = () => {
  return (
    <div className="text-tran fixed right-0 h-[239px] w-[77px] top-[64px]  bg-[#1E1E1E] text-white py-2 px-4 rounded-[0%_0%_0%_65%/25%_25%_35%] ">
      <div className="flex items-center gap-2 transform -rotate-90 justify-center  h-full">
        <div>
          <CiUser size={22} />
        </div>
        <div className=""> Feedback</div>
      </div>
    </div>
  );
};

export default FeedbackWidget;
