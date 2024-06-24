import { MdHome } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { TiFlowChildren } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { FaSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const SideNav = () => {
  return (
    <div className="flex flex-col w-52 section justify-between">
      <div className="flex flex-col gap-4 pt-4">
        <span className="flex gap-2 justify-start items-center  px-4">
          <MdHome className="text-gray-400" />
          Home
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <FaRegCheckCircle className="text-gray-400" />
          My tasks
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <FaRegBell className="text-gray-400" />
          Inbox
          <GoDotFill className="text-orange-400" />
        </span>
        <hr className="border-gray-400 w-full"></hr>
        <span className=" flex px-4  items-center justify-between">
          <p>Insights</p>
          <FaPlus className="text-gray-400" />
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <TiFlowChildren className="text-gray-400" />
          Reporting
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <FaRegFolderClosed className="text-gray-400" />
          Portfolios
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <GoGoal className="text-gray-400" />
          Goals
        </span>
        <span className=" flex px-4  items-center justify-between">
          <p>Projects</p>
          <FaPlus className="text-gray-400" />
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <FaSquare className="text-blue-400" />
          Tract work requests
        </span>
        <span className=" flex px-4  items-center justify-between">
          <p>Teams</p>
          <FaPlus className="text-gray-400" />
        </span>
        <span className="flex gap-2 justify-start items-center  px-4">
          <FaUserGroup className="text-gray-400" />
          Sunny's first team
          <GrFormNext className="text-gray-400" />
        </span>
        <hr className="border-gray-400 w-full"></hr>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex py-1 border-gray-400 border w-fit rounded-lg gap-2 home justify-start items-center  px-4">
          <FiMail className="text-gray-400" />
          Invite Teammates
        </div>
        <p className="text-gray-400 pb-4">Help with Asana</p>
      </div>
    </div>
  );
};

export default SideNav;
