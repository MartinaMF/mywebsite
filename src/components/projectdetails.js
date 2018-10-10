import React,{Component} from 'react';
import {Tabs,Tab,section, Grid, Cell,Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
function Projectdetails (props){
  return(
    <Card shadow={0} style={{width: '220px', height: '220px', margin: 'auto'}}>
 <CardTitle expand style={{color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>Update</CardTitle>
 <CardText>
    <p>{props.projectName}</p>
 </CardText>
 <CardActions border>
     <a colored href={props.githubLink} target="_blank" colored><Button colored>github</Button></a>
      <a colored href={props.codepenLink} target="_blank" colored><Button colored>codepen</Button></a>
      <a colored href={props.LivedemoLink} target="_blank" colored><Button colored>live demo</Button></a>
 </CardActions>
 </Card>
  );
}
export default Projectdetails;
