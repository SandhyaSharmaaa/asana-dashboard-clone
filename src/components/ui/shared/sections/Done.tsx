import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const Done = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-white text-lg ">Done</p>
          <p className="text-gray-400 ">0</p>
        </div>
        <div className="flex gap-4 text-white ">
          <FaPlus />
          <HiDotsVertical />
        </div>
      </div>
      <div className="section rounded-lg  h-full">
        <p className="text-center font-semibold text-gray-400 p-4">
          + Add task
        </p>
      </div>
    </div>
  );
};

export default Done;
