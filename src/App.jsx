import React, { useState, useEffect } from "react";
import BackToTop from "./components/BackToTop";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Produtos from "./components/Produtos";
import Newsletter from "./components/Newsletter";
import Detalhes from "./components/Detalhes";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <Layout />
      <Produtos />
      <Newsletter />
      <Detalhes />
      {showBackToTop && <BackToTop />}
    </>
  );
}
