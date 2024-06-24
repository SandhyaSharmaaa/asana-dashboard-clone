import { IoReorderThreeOutline } from "react-icons/io5";
// import { HiPlusCircle } from "react-icons/hi";
import { FaPlus, FaSearch } from "react-icons/fa";
import { ProfileMenu } from "./ProfileMenu";
// import { BiSolidPlusCircle } from "react-icons/bi";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-2 md:px-6 h-14 w-full sticky top-0 section z-10 shadow-md">
      <div className="flex gap-4 items-center justify-start">
        <IoReorderThreeOutline size={30} className="cursor-pointer" />
        <div
          className="flex border w-auto h-auto gap-2 px-1.5 py-0.5 border-gray-400
       rounded-lg items-center justify-center"
        >
          <span className="flex text-center bg-red-500 rounded-full h-5 w-5 justify-center items-center cursor-pointer">
          <FaPlus color="white" size={10} />
          </span>
          Create
        </div>
      </div>

      <div className="w-96 h-8 gap-2 text-white flex bg-zinc-600 rounded-full items-center justify-start px-4">
        <FaSearch />
        <input
          className="outline-none border-none p-0 w-full bg-transparent placeholder:text-white placeholder:items-center"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-0.1">
          <p className="text-orange-400">Free Trial</p>
          <p className="text-white">30 Days left</p>
        </div>
        <div className="border rounded-lg border-white px-2 py-1 cursor-pointer text-white">
          What's in my Trial
        </div>
        <div className="border rounded-lg cursor-pointer bg-orange-400 text-black px-2 py-1">
          Add billing info
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
