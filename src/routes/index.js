import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { PrivateRoute } from "./private";
import { PublicRoute } from "./public";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil";
//import Configurate from "../pages/Configurate";
import File from "../pages/File";
//import Order from "../pages/Order";
//import Inquerito from "../pages/Inquerito";
import Boletim from "../pages/Boletim";
//import Mandado from "../pages/Mandado";
//import InqueritoDocuments from "../pages/Documents/Inquerito";
import BoletimDocuments from "../pages/Documents/Boletim";
import ContigenteDocuments from "../pages/Documents/Contigente";

//import MandadoDocuments from "../pages/Documents/Mandado";

//import InqueritoEdit from "../pages/Edit/Inquerito";
import BoletimEdit from "../pages/Edit/Boletim";
//import MandadoEdit from "../pages/Edit/Mandado";

import Contigente from "../pages/Contigente";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute path="/" exact component={Home} />
      <PublicRoute path="/login" exact component={Login} />
      <PublicRoute path="/registrar" exact component={Register} />

      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/usuario/perfil" component={Perfil} />

      <PrivateRoute path="/arquivos" exact component={File} />
      <PrivateRoute path="/arquivos/boletim" exact component={Boletim} />

      <PrivateRoute
        path="/documentos/boletim/:number"
        component={BoletimDocuments}
      />
      <PrivateRoute
        path="/documentos/contigente/:rg"
        component={ContigenteDocuments}
      />

      <PrivateRoute path="/edit/boletim/:number" component={BoletimEdit} />

      <PrivateRoute path="/contigente" component={Contigente} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

/*
      <PrivateRoute path="/usuario/configuracao" component={Configurate} />


      <PrivateRoute
        path="/documentos/inquerito/:number"
        component={InqueritoDocuments}
      />
      <PrivateRoute
        path="/documentos/mandado/:number"
        component={MandadoDocuments}
      />

            <PrivateRoute path="/edit/inquerito/:number" component={InqueritoEdit} />
      <PrivateRoute path="/edit/mandado/:number" component={MandadoEdit} />

            <PrivateRoute path="/arquivos/inquerito" exact component={Inquerito} />
      <PrivateRoute path="/arquivos/mandado" exact component={Mandado} />

*/
