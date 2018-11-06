import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
 class Landing extends Component{
   render(){
     return(
       <div>
       <div className="blurimg"></div>
       <div style={{width:'80%', margin:'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>

            </Cell>
            <div className="banner-text">
            <h2 style={{fontFamily:'Play', color:'black'}}>Martina faragalla</h2>
            <h1 style={{fontFamily:'Play'}}>Full-stack JavaScript developer</h1>
            <hr/>
            <p className="slogan"> web Developer with a passion for web application development . Skilled in conceptualizing, development and logical solutions to business problems.
             Dedicated to driving innovation with the ability to follow industry and technological trends.</p>
            <p>HTML5/css3 | Bootstrap | JavaScript | React | Redux | NodeJs | Express | MangoDB</p>
            <div className="social-links" style={{color:'black'}}>
            <a href="https://www.linkedin.com/in/martina-faragalla-48833b108/" target="_blank"><i className="fa fa-linkedin-square" style={{color:'black'}}></i></a>
            <a href="https://github.com/MartinaMF" target="_blank"><i className="fa fa-github-square" style={{color:'black'}}></i></a>
            <a href="https://www.freecodecamp.com" target="_blank"><i className="fa fa-free-code-camp" style={{color:'black'}}></i></a>
            </div>
            </div>

          </Grid>
       </div>
       </div>
     )
   }
 }
 export default Landing;
