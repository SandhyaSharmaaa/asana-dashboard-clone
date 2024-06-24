import Header from "./Header";
import SideNav from "./SideNav";
import Home from "./Home";

const Layout = () => {
  return (
    <div className="min-h-screen flex  flex-col flex-auto relative">
      <Header />
      <section className="flex h-full flex-1">
        <SideNav />
        <main className="flex-1 home">
          <Home />
        </main>
      </section>
    </div>
  );
};

export default Layout;
