import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/core/Header";
import Footer from "./components/core/Footer";
import Sidebar from "./components/core/Sidebar";
import { SidebarProvider } from "./context/sidebar_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <Header />
        <Sidebar />
        <App />
        <Footer />
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
