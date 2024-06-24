import Header from "./Header";
import SideNav from "./SideNav";
import Home from "./Home";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col flex-auto relative">
      <Header />
      <section className="flex h-full">
        <SideNav />
        <main className="flex-1">
          <Home />
        </main>
      </section>
    </div>
  );
};

export default Layout;
