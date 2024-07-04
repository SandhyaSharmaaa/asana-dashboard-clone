import Header from "../components/ui/shared/Header";
import SideNav from "../components/ui/shared/SideNav";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SectionHeader from "@/components/ui/shared/SectionHeader";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSideNav = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="min-h-screen flex flex-col flex-auto relative">
      <Header toggleSideNav={toggleSideNav} />
      <section className="flex h-full flex-1">
        <SideNav isCollapsed={isCollapsed} />
        <main className="flex-1 home">
          <div className="flex flex-col gap-4 w-full">
            <SectionHeader />
          </div>
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default Layout;
