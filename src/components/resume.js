import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education.js';
import Skills from './skills.js';
import Certifications from './certifications.js'
 class Resume extends Component{
   render(){
     return(
       <div>
          <Grid className="resumegrid" style={{border:'0.5px solid white',marginLeft:'15%',width:'70%'}}>
          <Cell className="education" col={10} style={{textAlign:'center',color:'white', marginBottom:'10px'}}>
          <h2>Education</h2>
          <Education startYear={2007}
          endYear={2011}
          schoolName="Bachelor's degree in computers  and information science Assuit Univrsity Egypt"
          schoolDescription="Evaluated by:WORLD EDUCATION SERVICES  New York  2016 "
          />
          <Education startYear={2016}
          endYear={2018}
          schoolName="Oline programming camp"
          schoolDescription="Free Code Camp"
          />
          </Cell>
          <div className="backgroundcolor"></div>
          <Cell className="skills" col={10} style={{textAlign:'center',color:'white',marginBottom:'10px'}}>
          <h2>Skills</h2>
          <Skills
          skill='JavaScript'
          progress={80}
          />
          <Skills
          skill='React'
          progress={70}
          />
          <Skills
          skill='jQuary'
          progress={60}
          />
          <Skills
          skill='Html/css'
          progress={65}
          />
          </Cell>
          <Cell className="Certifications" col={10} style={{textAlign:'center',color:'white',margin:'50px auto'}}>
          <h2>Certifications</h2>
          <Certifications/>
          </Cell>

          <Cell className="adress" col={10} style={{color:'white'}}>
          <div>
          <h5><i className='fa fa-home'></i>Adress : 480 S 9th st. AptE203</h5>
          </div>
            <div>
            <h5><i className='fa fa-home'></i>Email : martinamaken@gamil.com</h5>
            </div>
              <div>

              <h5><i className='fa fa-home'></i>Web : <a href="#">mywebsite.com</a></h5>
              </div>


          </Cell>

          </Grid>
       </div>
     )
   }
 }
 export default Resume;
