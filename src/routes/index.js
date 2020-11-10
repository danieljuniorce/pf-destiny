import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil";
import Configurate from "../pages/Configurate";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/registrar" exact component={Register} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/usuario/perfil" component={Perfil} />
      <Route path="/usuario/configuracao" component={Configurate} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
