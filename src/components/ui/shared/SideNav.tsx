// import React from "react";
import { MdHome } from "react-icons/md";
import { FaRegCheckCircle, FaRegBell, FaPlus, FaSquare } from "react-icons/fa";
import { GoDotFill, GoGoal } from "react-icons/go";
import { TiFlowChildren } from "react-icons/ti";
import { FaRegFolderClosed, FaUserGroup } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

interface SideNavProps {
  isCollapsed: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ isCollapsed }) => {
  const iconSize = 24;

  return (
    <div
      className={`flex flex-col ${
        isCollapsed ? "w-16" : "w-52"
      } section justify-between`}
    >
      <div className="flex flex-col gap-4 pt-4">
        <span className="cursor-pointer flex gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <MdHome className="text-gray-400" size={iconSize} />
          {!isCollapsed && "Home"}
        </span>
        <span className="flex cursor-pointer gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2 ">
          <FaRegCheckCircle className="text-gray-400" size={iconSize} />
          {!isCollapsed && "My tasks"}
        </span>
        <span className="flex cursor-pointer gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <FaRegBell className="text-gray-400" size={iconSize} />

          {!isCollapsed && "Inbox"}
          <GoDotFill className="text-orange-400" />
        </span>
        <hr className="border-zinc-700 w-full"></hr>
        <span className="cursor-pointer flex px-4 items-center justify-between">
          <p>{!isCollapsed && "Insights"}</p>
          <FaPlus className="text-gray-400" />
        </span>
        <span className="cursor-pointer flex gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <TiFlowChildren className="text-gray-400" size={iconSize} />
          {!isCollapsed && "Reporting"}
        </span>
        <span className="cursor-pointer flex gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <FaRegFolderClosed className="text-gray-400" size={iconSize} />
          {!isCollapsed && "Portfolios"}
        </span>
        <span className="cursor-pointer flex gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <GoGoal className="text-gray-400" size={iconSize} />
          {!isCollapsed && "Goals"}
        </span>
        <span className="cursor-pointer flex px-4 items-center justify-between">
          <p>{!isCollapsed && "Projects"}</p>
          <FaPlus className="text-gray-400" />
        </span>
        <span className="cursor-pointer flex gap-2 justify-start items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
          <FaSquare className="text-blue-400" size={iconSize} />
          {!isCollapsed && "Tract work requests"}
        </span>
        <span className="cursor-pointer flex px-4 items-center justify-between">
          <p>{!isCollapsed && "Teams"}</p>
          <FaPlus className="text-gray-400" />
        </span>
        {!isCollapsed && (
          <span className="flex cursor-pointer gap-2 w-full items-center px-4 bg-home hover:bg-white text-base hover:text-zinc-800 hover:rounded-lg py-0.2">
            <FaUserGroup className="text-gray-400" size={iconSize} />
            <span className="cursor-pointer flex w-full items-center justify-between ">
              Sunny's first team
              <GrFormNext className="text-gray-400 text-xl" />
            </span>
          </span>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <hr className="border-zinc-700 w-full"></hr>
        <div className="flex py-1 border-zinc-700 border w-fit rounded-lg gap-2 home justify-start items-center px-4">
          <FiMail
            className="text-gray-400 text-[8px] md:text-base"
            size={iconSize}
          />
          {!isCollapsed && (
            <p className="text-[8px] md:text-base cursor-pointer">
              Invite Teammates
            </p>
          )}
        </div>
        <p className="text-gray-400 pb-4 text-[8px] md:text-base cursor-pointer">
          {!isCollapsed && "Help with Asana"}
        </p>
      </div>
    </div>
  );
};

export default SideNav;
