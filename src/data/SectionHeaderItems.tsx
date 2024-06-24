import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { MdLeaderboard } from "react-icons/md";
import { FaTimeline } from "react-icons/fa6";
import { TbLayoutDashboard } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { TbClipboardText } from "react-icons/tb";
import { RiFlowChart } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { LuGanttChartSquare } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

interface SectionHeaderItem {
  icon: React.ReactNode;
  text?: string;
  className?: string;
}

export const sectionHeaderItems: SectionHeaderItem[] = [
  { icon: <TfiLayoutListThumbAlt />, text: "List" },
  { icon: <MdLeaderboard />, text: "Board", className: "text-white" },
  { icon: <FaTimeline />, text: "Timeline" },
  { icon: <TbLayoutDashboard />, text: "Dashboard" },
  { icon: <SlCalender />, text: "Calender" },
  { icon: <TbClipboardText />, text: "Overview" },
  { icon: <RiFlowChart />, text: "Workflow" },
  { icon: <MdOutlineMessage />, text: "Messages" },
  { icon: <IoMdAttach />, text: "Files" },
  { icon: <LuGanttChartSquare />, text: "Gantt" },
  { icon: <FaPlus /> },
];
