import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Principal from "./Componentes/Paginas/Principal";
import Reporte from "./Componentes/Paginas/Reporte";
import Navbar from "./Componentes/Navegacion/Navbar";
import AcercaDe from "./Componentes/Navegacion/AcercaDe";

import "bootswatch/dist/quartz/bootstrap.min.css";
import "./index.css";
import Gramatica from "./Componentes/Navegacion/Gramatica";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="conteiner p-2">
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route path="/Reporte" component={Reporte} />
          <Route path="/AcercaDe" component={AcercaDe} />
          <Route path="/Gramatica" component={Gramatica} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
