import React from "react";
import Header from "../components/Header/Header.jsx";
import Banner from "../banner/Banner.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Rowlist from "../components/Rows/rowlist/Rowlist.jsx"


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
}

export default Home;
