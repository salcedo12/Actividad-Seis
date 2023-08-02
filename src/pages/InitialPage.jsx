import React from "react";
import ContentInitialPage from "../components/ContentInitialPage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/ContainerAppStyle.css";
import { Outlet } from "react-router";

function InitialPage() {
  return (
    <>
      <NavBar />
      <article className="container-app">
        <ContentInitialPage />
      </article>
      <Footer />
      <Outlet/>
    </>
  );
}

export default InitialPage;
