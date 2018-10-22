import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Education extends Component{
  render(){
    return(
      <Grid>
      <Cell col={4}>
      <h4 style={{color:'black'}}>{this.props.startYear} - {this.props.endYear}</h4>
      </Cell>
      <Cell col={8}>
      <h4 style={{marginTop:'8px',color:'black'}}>{this.props.schoolName}</h4>
      <p style={{color:'black'}}>{this.props.schoolDescription}</p>
      </Cell>
      </Grid>
    )
  }
}
export default Education;
