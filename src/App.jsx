import React from "react";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

const navItems = [
  { title: "Accueil", link: "/" },
  { title: "Historique", link: "/history" },
];

const App = () => {
  return (
    <>
      <section className="navbar">
        <Header NavItems={navItems} />
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
