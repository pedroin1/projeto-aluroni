import React from "react";
import ReactDOM from "react-dom/client";
import Cardapio from "./components/Cardapio";
import { GlobalStyle } from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Cardapio />
  </React.StrictMode>
);
