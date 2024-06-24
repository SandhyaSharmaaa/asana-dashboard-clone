import { todoData } from "@/data/index";
import { Card, CardContent } from "@/components/ui/card";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { DoingData } from "@/data/index";

const ToDo = () => {
  return (
    <div className="flex flex-col gap-2  rounded-lg ">
      <div className="flex gap-2 items-start justify-between ">
        <div className="flex gap-2 items-center">
          <p className="text-white text-lg ">To Do</p>
          <p className="text-gray-400 ">5</p>
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
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-orange-400">
                Medium
              </p>
              <p className="rounded-full text-black text-xs px-3 py-0.5 items-center justify-center flex bg-yellow-400">
                At risk
              </p>
            </div>
            <div className="flex items-center justify-start gap-4">
              <p className=" text-2xl text-gray-400">{item.icon2}</p>
              <p className=" text-gray-400">{item.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      {todoData.map((item) => (
        <Card
          key={item.id}
          className=" section border-zinc-700 px-2 py-0.5 rounded-lg"
        >
          <CardContent className="flex items-center gap-2">
            <span className=" text-lg text-gray-400">{item.icon1}</span>
            <span className="text-base text-white">{item.text}</span>
          </CardContent>
          <CardContent className="flex items-center justify-start gap-4">
            <span className=" text-2xl text-gray-400">{item.icon2}</span>
            <span className=" text-gray-400">{item.date}</span>
          </CardContent>
        </Card>
      ))}
      <p className="text-center font-semibold text-gray-400">+ Add task</p>
    </div>
  );
};

export default ToDo;
