import { DoingData } from "@/data/index";
import { Card, CardContent } from "../../card";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const Doing = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg">
      <div className="flex gap-2 items-start justify-between ">
        <div className="flex gap-2 items-center">
          <p className="text-white text-lg">Doing</p>
          <p className="text-gray-400">5</p>
        </div>
        <div className="flex gap-4 text-white ">
          <FaPlus />
          <HiDotsVertical />
        </div>
      </div>
      {DoingData.map((item) => (
        <Card key={item.id} className=" section border-zinc-700 rounded-lg p-2">
          <CardContent className="flex items-center p-2 gap-2">
            <p className=" text-lg">{item.icon1}</p>
            <p className="text-base text-white">{item.text}</p>
          </CardContent>
          <CardContent className="space-y-2 p-2">
            <div className="flex gap-2">
              <span className="rounded-full text-black text-xs px-3 items-center justify-center flex py-0.5 bg-purple-400">
                {item.button1text}
              </span>
              <span className="rounded-full text-black text-xs px-3 items-center justify-center flex py-0.5 bg-red-400">
                {item.button2text}
              </span>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p className=" text-2xl text-gray-400">{item.icon2}</p>
              <p className=" text-gray-400">{item.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      <p className="text-center font-semibold text-gray-400">+ Add task</p>
    </div>
  );
};

export default Doing;
