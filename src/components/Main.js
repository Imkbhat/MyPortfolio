import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./Landingpage";

import Resume from "./Resume";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/aboutme" exact component={Aboutme} />
      <Route path="/resume" exact component={Resume} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
};

export default Main;
