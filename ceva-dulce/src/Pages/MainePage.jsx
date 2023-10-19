import React from "react";
import MiddleLine from "./MiddleLine";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Acasa from "./Acasa";

const MainePage = () => {
  return (
    <div>
      <NavBar />
      <Acasa />
      <MiddleLine />
      <Contact />
      <MiddleLine />
    </div>
  );
};
export default MainePage;
