import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education.js';
import Skills from './skills.js';
import Certifications from './certifications.js'
 class Resume extends Component{
   render(){
     return(
       <div>
          <Grid>
          <Cell col={4}>
          <div style={{textAlin:'center'}}>
          </div>
          <h2 style={{paddingTop:'2em'}}>Martina Faragalla</h2>
          <h4 style={{color:'grey'}}>Web Developer</h4>
          <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
          <p>I have developed web-based applications from design to coding and full implementation.I have a Bachelor’s Degree in Information Technology and I am committed to staying up-to-date with all technological advancements. </p>
          <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
          <h5>Adress</h5>
          <p>480 S 9th st. AptE203</p>
          <h5>Email</h5>
          <p>martinamaken@gamil.com</p>
          <h5>Web</h5>
          <p>mywebsite.com</p>
          <p>martinamaken@gamil.com</p>
          <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education startYear={2007}
            endYear={2011}
            schoolName="Assuit university"
            schoolDescription="information Technology department"
            />
            <Education startYear={2007}
            endYear={2011}
            schoolName="Assuit university"
            schoolDescription="information Technology department"
            />
            <hr style={{borderTop:'5px solid #e22947',width:'70%', margin:'auto'}}/>
            <h2>Certifications</h2>
            <Certifications />
            <hr style={{borderTop:'5px solid #e22947',width:'70%',margin:'auto'}}/>
            <h2>Skills</h2>
            <Skills
            skill='JavaScript'
            progress={100}
            />
            <Skills
            skill='React'
            progress={100}
            />
            <Skills
            skill='jQuary'
            progress={100}
            />
          </Cell>
          </Grid>
       </div>
     )
   }
 }
 export default Resume;
