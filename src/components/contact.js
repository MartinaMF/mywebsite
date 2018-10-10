import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
 class Contact extends Component{
   render(){
     return(
       <div className="contact-body">
          <Grid className="contact-grid">
          <Cell col={6}>
          <h1>Martina Faragalla</h1>
          <img
          src="https://i2.wp.com/sprysquared.com/wp-content/uploads/2017/12/female-avatar-378x470.jpg?ssl=1"
          alt="avatar"
          style={{width:'200px',height:'250px;'}}
           />
           <p style={{width:'75%', margin:'auto',paddingTop:'1em'}}>
           I have developed web-based applications from design to coding and full implementation.I have a Bachelor’s Degree in Information Technology and I am committed to staying up-to-date with all technological advancements.
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
