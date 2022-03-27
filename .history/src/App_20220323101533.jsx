import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Nav from './components/nav'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
