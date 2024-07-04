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
  link?: string;
}

export const sectionHeaderItems: SectionHeaderItem[] = [
  { icon: <TfiLayoutListThumbAlt />, text: "List", link: "/page/list" },
  {
    icon: <MdLeaderboard />,
    text: "Board",

    link: "/",
  },
  { icon: <FaTimeline />, text: "Timeline", link: "/page/timeline" },
  { icon: <TbLayoutDashboard />, text: "Dashboard", link: "/page/dashboard" },
  { icon: <SlCalender />, text: "Calender", link: "/page/calender" },
  { icon: <TbClipboardText />, text: "Overview", link: "/page/overview" },
  { icon: <RiFlowChart />, text: "Workflow", link: "/page/workflow" },
  { icon: <MdOutlineMessage />, text: "Messages", link: "/page/messages" },
  { icon: <IoMdAttach />, text: "Files", link: "/page/files" },
  { icon: <LuGanttChartSquare />, text: "Gantt", link: "/page/gantt" },
  { icon: <FaPlus />, link: "/page/add" },
];
