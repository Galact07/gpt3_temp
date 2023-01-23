import React from "react";
import "./App.css";
import {
  Blogs,
  Features,
  Header,
  Footer,
  Possibility,
  WhatGPT,
} from "./container";
import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
