import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main.js';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <div className="color"></div>
    <Layout style={{background: 'url(https://blogsimages.adobe.com/dreamweaver/files/2015/06/window-optimized-700x375.png) center / cover'}}>
        <Header transparent  id="mainheader"  className="header-color" style={{color: 'red',position:'fixed'}} title={<Link style={{textDecoration:'none',color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" style={{position:'fixed'}}>
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact me</Link>
            </Navigation>
        </Drawer>
        <Content style={{marginTop:'100px'}}>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
