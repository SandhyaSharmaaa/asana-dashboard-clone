import { MdHome } from "react-icons/md";
import { FaRegCheckCircle, FaRegBell, FaPlus, FaSquare } from "react-icons/fa";
import { GoDotFill, GoGoal } from "react-icons/go";
import { TiFlowChildren } from "react-icons/ti";
import { FaRegFolderClosed, FaUserGroup } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";

export const sideNavItems = [
  { icon: MdHome, text: "Home" },
  { icon: FaRegCheckCircle, text: "My tasks" },
  {
    icon: FaRegBell,
    text: "Inbox",
    additionalIcon: GoDotFill,
    additionalIconClass: "text-orange-400",
  },
  { isDivider: true },
  {
    text: "Insights",
    additionalIcon: FaPlus,
    additionalIconClass: "text-gray-400",
    isExpandable: true,
  },
  { icon: TiFlowChildren, text: "Reporting" },
  { icon: FaRegFolderClosed, text: "Portfolios" },
  { icon: GoGoal, text: "Goals" },
  {
    text: "Projects",
    additionalIcon: FaPlus,
    additionalIconClass: "text-gray-400",
    isExpandable: true,
  },
  { icon: FaSquare, text: "Track work requests", textClass: "text-blue-400" },
  {
    text: "Teams",
    additionalIcon: FaPlus,
    additionalIconClass: "text-gray-400",
    isExpandable: true,
  },
  {
    icon: FaUserGroup,
    text: "Sunny's first team",
    additionalIcon: GrFormNext,
    additionalIconClass: "text-gray-400 text-xl",
  },
];
