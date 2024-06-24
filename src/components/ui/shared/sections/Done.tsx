import { FaPlus } from "react-icons/fa6"
import { HiDotsVertical } from "react-icons/hi"

const Done = () => {
  return (
    <div className="flex flex-col">
     <div className='flex gap-2 items-start justify-between text-lg'>
    <div className='flex gap-2'>
        <p className='text-white font-semibold '>Done</p>
        <p className='text-gray-400 '>0</p>
        </div>
        <div className="flex gap-4 text-white text-[16px]">
        <FaPlus />
        <HiDotsVertical />
        </div>
        </div>
    <div className="section rounded-lg w-60 h-full">
    <p className="text-center font-semibold text-gray-400 p-4">+ Add task</p>

    </div>
    </div>
  )
}

export default Done