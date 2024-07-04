import { sectionHeaderItems } from "@/data/SectionHeaderItems";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa6";
import { GrHide } from "react-icons/gr";
import { useTasks } from "@/context/AppContext";
import { NavLink } from "react-router-dom";

const SectionHeader = () => {
  const { handleOpenForm } = useTasks();

  return (
    <div className="flex flex-col gap-2 pt-2 sectionheader">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center justify-start cursor-pointer">
          <p className="text-lg text-white">Track work request</p>
          <RiArrowDropDownLine className="text-gray-400" size={34} />
          <CiStar className="text-gray-400" size={20} />
        </div>

        <div className="rounded-full cursor-pointer bg-blue-400 h-8 w-8 items-center flex text-black justify-center">
          S
        </div>
      </div>
      <div className="flex justify-between text-gray-400">
        {sectionHeaderItems.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              `${
                isActive && "text-white"
              } flex items-center hover:text-white justify-center gap-2 cursor-pointer flex-grow ${
                item.className || ""
              }`
            }
          >
            {item.icon}
            {item.text && <span>{item.text}</span>}
          </NavLink>
        ))}
      </div>
      <hr className="border-zinc-700 w-full" />
      <div className="flex gap-4 items-center px-4 justify-start">
        <div className="flex gap-0 text-gray-400 pt-1 cursor-pointer">
          <div
            className="flex items-center justify-center gap-1 border border-zinc-700 px-2 py-0.5 rounded-l-lg cursor-pointer"
            onClick={handleOpenForm}
          >
            <FaPlus />
            <p className="text-white ">Add task</p>
          </div>
          <div className="border border-zinc-700 px-2 py-0.5 rounded-r-lg">
            <span className="items-center justify-center">
              <RiArrowDropDownLine size={26} />
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <span className=" cursor-pointer hover:text-white flex items-center justify-center gap-2 flex-grow text-gray-400">
            <IoFilterOutline />
            Filter
          </span>
          <span className="cursor-pointer hover:text-white flex items-center justify-center gap-2 flex-grow text-gray-400">
            <TbArrowsSort />
            Sort by
          </span>
          <span className=" cursor-pointer hover:text-white flex items-center justify-center gap-2 flex-grow text-gray-400">
            <FaLayerGroup />
            Group by
          </span>
          <span className="flex items-center cursor-pointer hover:text-white justify-center gap-2 flex-grow text-gray-400">
            <GrHide />
            Hide
          </span>
        </div>
      </div>
      <hr className="border-zinc-700 w-full" />
    </div>
  );
};

export default SectionHeader;
