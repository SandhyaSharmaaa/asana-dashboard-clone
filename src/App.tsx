import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/shared/Layout";
import Home from "./components/ui/shared/Home";
import Page from "./components/ui/shared/Page";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page/:id" element={<Page />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
