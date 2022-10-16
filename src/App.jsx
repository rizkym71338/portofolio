import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/portofolio" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default App;
