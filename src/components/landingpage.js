import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
 class Landing extends Component{
   render(){
     return(
       <div style={{width:'80%', margin:'auto'}}>
          <Grid className="landing-grid">
            <Cell col={12}>
            <img src="http://rotarymeansbusiness.com/wp-content/uploads/avatar-female.png"
            alt="avatar-img" className="avatar"/>
            </Cell>
            <div className="banner-text">
            <h1>Full-stack web developer</h1>
            <hr/>
            <p>HTML5/css3 | Bootstrap | JavaScript | React | Redux | NodeJs | Express | MangoDB</p>
            <div className="social-links">
            <a href="https://www.linkedin.com/in/martina-faragalla-48833b108/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://github.com/MartinaMF" target="_blank"><i className="fa fa-github-square"></i></a>
            <a href="https://www.freecodecamp.com" target="_blank"><i className="fa fa-free-code-camp"></i></a>
            </div>
            </div>
          </Grid>
       </div>
     )
   }
 }
 export default Landing;
