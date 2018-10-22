import React,{Component} from 'react';
import{Grid,Cell} from 'react-mdl';
class Certifications extends Component{
  render(){
    return(
      <div className="certifydisplay" style={{display:'grid',gridTemplateColumns:'auto auto'}}>
      <div style={{textAlign:'left'}}>
      <p><a href="https://www.freecodecamp.org/certification/martinamf/responsive-web-design">responsive web design certification</a></p>
      <p><a href="https://www.freecodecamp.org/certification/martinamf/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures certification</a></p>
      <p><a href="https://www.freecodecamp.org/certification/martinamf/legacy-front-end">Front End Development</a></p>
      </div>
      <div>
      <p>given by <a href='https://www.freecodecamp.org/'>free code camp</a></p>
      <p>given by <a href='https://www.freecodecamp.org/'>free code camp</a></p>
      <p>given by <a href='https://www.freecodecamp.org/'> free code camp</a></p>
      </div>
      </div>
    );
  }
}
export default Certifications;
