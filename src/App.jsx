import React from "react";

import Header from "./components/Layout/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Layout/Footer.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
