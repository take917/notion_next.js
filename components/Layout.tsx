import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
};

export default Layout;
