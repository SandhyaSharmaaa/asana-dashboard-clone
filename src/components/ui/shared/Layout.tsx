import Header from "./Header";
import SideNav from "./SideNav";
import Home from "./Home";
import { useState } from "react";

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
          <Home />
        </main>
      </section>
    </div>
  );
};

export default Layout;
