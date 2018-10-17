import React,{Component} from 'react';
import{Grid,Cell} from 'react-mdl';
class Certifications extends Component{
  render(){
    return(
      <grid>
      <Cell>
      <a href="https://www.freecodecamp.org/certification/martinamf/responsive-web-design" target="_blank"><p>responsive web design Certification by</p><h3><a href="" target="_blanck">freecodecamp</a></h3></a>
      </Cell>
      <Cell>
      <a href="https://www.freecodecamp.org/certification/martinamf/javascript-algorithms-and-data-structures" target="blank"><p>JavaScript Algorithms and Data Structures Certification by</p><h3><a href="" target="_blanck">freecodecamp</a></h3></a>
      </Cell>
      </grid>
    );
  }
}
export default Certifications;
