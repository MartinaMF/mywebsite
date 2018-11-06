import React,{Component} from 'react';
import {Tabs,Tab,section, Grid, Cell,Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
function Projectdetails (props){
  return(
    <Card className="projectcard" shadow={0} style={{width: '20%', height: '25%', margin: 'auto'}}>
 <CardTitle expand style={{backgroundImage:props => `url(${props.backgroundImage})`,backgroundSize:'cover',backgroundPosition: 'center'}}><h5>{props.projectName}</h5></CardTitle>
 <CardText>
    <p>{props.projectDescription}</p>
 </CardText>
 <CardActions border>
     <a colored href={props.projectLink} target="_blank" colored><Button colored>show project</Button></a>
 </CardActions>
 </Card>
  );
}
export default Projectdetails;
