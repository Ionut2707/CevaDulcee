import React from "react";
import MiddleLine from "./MiddleLine";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Acasa from "./Acasa";
import Footer from "./Footer";
import Produse from "./Produse";

const MainePage = () => {
  return (
    <div>
      <NavBar />
      <Acasa />
      <MiddleLine />
      <Produse />
      <MiddleLine/>
      <Contact />
      <MiddleLine />
      <Footer />
    </div>
  );
};
export default MainePage;
