import { DoingData } from "@/data/index";
import { Card, CardContent } from "../../card";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";

const Doing = () => {

    return (
      <div className="flex flex-col p-4 gap-2 rounded-lg">

<div className='flex gap-2 items-start justify-between text-lg'>
    <div className='flex gap-2'>
        <p className='text-white font-semibold '>Doing</p>
        <p className='text-gray-400 '>5</p>
        </div>
        <div className="flex gap-4 text-white text-[16px]">
        <FaPlus />
        <HiDotsVertical />
        </div>
        </div>
          {DoingData.map(item => (
            <Card key={item.id} className="w-80 section border-gray-600 rounded-lg p-2">
              <CardContent className="flex items-center p-2 gap-2">
                <p className=" text-lg">{item.icon1}</p>
                <p className="text-lg text-white">{item.text}</p>
              </CardContent>
              <CardContent className="space-y-2 p-2">
                <div className="flex gap-2">
                <p  className="rounded-full text-black text-sm px-4 py-1 bg-purple-400">{item.button1text}</p>
                <p   className="rounded-full text-black text-sm px-4 py-1 bg-red-400">{item.button2text}</p>
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
    }

export default Doing