import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume'
const Main = ()=>(
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
)
export default Main;
