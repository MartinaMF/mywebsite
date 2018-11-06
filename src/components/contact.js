import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
 class Contact extends Component{
   render(){
     return(
       <div className="contact-body">
          <Grid className="contact-grid">
          <Cell col={6}>
          <h1>Martina Faragalla</h1>

           <p style={{width:'75%', margin:'auto',paddingTop:'1em', color:'black'}}>
           front-end web Developer with a solid knowldge of back-end development.
           have  passion for web application development . Skilled in conceptualizing,
            development and logical solutions to business problems. Dedicated to driving
            innovation with the ability
            to follow industry and technological trends.
           </p>
          </Cell>
          <Cell col={6}>
          <h1>Contact me</h1>
          <hr/>
          <div className="contact-list">
          <List>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
            <i className="fa fa-phone-square" aria-hidden="true"/>(267)831 9132
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
            <i className="fa fa-envelope" aria-hidden="true"/>martinamaken@gmail.com
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
            <i className="fa fa-skype" aria-hidden="true"/>tota@skpe
            </ListItemContent>
          </ListItem>
          </List>
          </div>
          </Cell>
          </Grid>
       </div>
     )
   }
 }
 export default Contact;
