import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/sections/Home";
import Page from "./pages/Page";

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
