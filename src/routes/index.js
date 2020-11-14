import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil";
import Configurate from "../pages/Configurate";
import File from "../pages/File";
import Order from "../pages/Order";
import Inquerito from "../pages/Inquerito";
import Boletim from "../pages/Boletim";
import Mandado from "../pages/Mandado";
import InqueritoDocuments from "../pages/Documents/Inquerito";
import BoletimDocuments from "../pages/Documents/Boletim";
import MandadoDocuments from "../pages/Documents/Mandado";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/registrar" exact component={Register} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/usuario/perfil" component={Perfil} />
      <Route path="/usuario/configuracao" component={Configurate} />

      <Route path="/arquivos" exact component={File} />
      <Route path="/arquivos/solicitacoes" component={Order} />
      <Route path="/arquivos/boletim" component={Boletim} />
      <Route path="/arquivos/inquerito" component={Inquerito} />
      <Route path="/arquivos/mandado" component={Mandado} />

      <Route path="/documentos/boletim/:number" component={BoletimDocuments} />
      <Route
        path="/documentos/inquerito/:number"
        component={InqueritoDocuments}
      />
      <Route path="/documentos/mandado/:number" component={MandadoDocuments} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
