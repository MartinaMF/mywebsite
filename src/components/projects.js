import React, {Component} from 'react';
import Projectdetails from './projectdetails';
import {Tabs,Tab,section, Grid, Cell,Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Dialog,DialogTitle,DialogContent,DialogActions,Textfield} from 'react-mdl'
 class Projects extends Component{
   constructor(props){
     super(props);
     this.state={
       activeTap:0,
       openDialog: false,
       projectName:'',
       projectCategory:'',
       githubLink:'',
       codepenLink:"",
       LivedemoLink:"",
       ReactProjects:[],
       JavaScriptProjects:[],
       JQuaryProjects:[]
     }
     this.handleOpenDialog = this.handleOpenDialog.bind(this);
     this.handleCloseDialog = this.handleCloseDialog.bind(this);
     this.AddNewProject = this.AddNewProject.bind(this);
   }
   componentDidMount(){
      let ReactProjects = JSON.parse(localStorage.getItem('ReactProjects')) || [];
      let JavaScriptProjects = JSON.parse(localStorage.getItem('JavaScriptProjects')) || [];
      let JQuaryProjects = JSON.parse(localStorage.getItem('JQuaryProjects')) || [];
      this.setState({ReactProjects,JavaScriptProjects,JQuaryProjects});
    }
    toggleCategories() {
      if(this.state.activeTap ===0){
        return(<div className="displayProjects">
        <Projectdetails
        projectName='TimeStamp'
        githubLink='https://github.com/MartinaMF/TimeStamp'
        codepenLink='#'
        LivedemoLink='https://martinatimestamp.herokuapp.com/'
        backgroundImage=''
        />
        <Projectdetails
        projectName='Request Header'
        githubLink='https://github.com/MartinaMF/request-header'
        codepenLink='#'
        LivedemoLink='#'
        backgroundImage=''
        />
        <Projectdetails
        projectName='url-shortener'
        githubLink='https://github.com/MartinaMF/url-shortener'
        codepenLink=''
        LivedemoLink=''
        backgroundImage=''
        />
        </div>
      );
      }
      else if(this.state.activeTap ===1){
        return(<div className="displayProjects">
        <Projectdetails
        projectName='Tic-tac-toe Game'
        githubLink=''
        codepenLink='https://codepen.io/MartinaMF/pen/LjNdNN'
        LivedemoLink='#'
        backgroundImage=''
        />
        <Projectdetails
        projectName='POMODORO CLOCK'
        githubLink=''
        codepenLink='https://codepen.io/MartinaMF/pen/dzPbMR'
        LivedemoLink='#'
        backgroundImage=''
        />
        <Projectdetails
        projectName='Simon Game'
        githubLink=''
        codepenLink='https://codepen.io/MartinaMF/pen/EvQdYZ'
        LivedemoLink='#'
        backgroundImage=''
        />
        </div>
      );
      }
      else if(this.state.activeTap ===2){
        return(<div className="displayProjects">
        <Projectdetails
        projectName='recipe Box'
        githubLink='https://github.com/MartinaMF/recipeBox'
        codepenLink='#'
        LivedemoLink='#'
        backgroundImage=''
        />
        <Projectdetails
        projectName='Game of life'
        githubLink='https://github.com/MartinaMF/game-of-life'
        codepenLink='#'
        LivedemoLink='#'
        backgroundImage=''
        />
        <Projectdetails
        projectName='CamperLeaderboard'
        githubLink='https://github.com/MartinaMF/CamperLeaderboard'
        codepenLink='https://codepen.io/MartinaMF/pen/RVdvjz'
        LivedemoLink='#'
        backgroundImage=''
        />
        </div>
      );
      }

    }
   DynamictoggleCategories() {
     if(this.state.activeTap ===0){
       if(this.state.JQuaryProjects.length>=1){
         const projects = this.state.JQuaryProjects.map((item,i)=>
         <Projectdetails
         projectName={item.projectname.toUpperCase()}
         githubLink={item.githubLink}
         codepenLink={item.codepenLink}
         LivedemoLink={item.LivedemoLink}
         backgroundImage=''
         />)
           return(<div className="displayProjects">
            {projects}
           </div>
         );
       }
     }
     else if(this.state.activeTap ===1){
       if(this.state.JavaScriptProjects.length>=1){
         const projects = this.state.JavaScriptProjects.map((item,i)=>
         <Projectdetails
         projectName={item.projectname.toUpperCase()}
         githubLink={item.githubLink}
         codepenLink={item.codepenLink}
         LivedemoLink={item.LivedemoLink}
         backgroundImage='https://uploads.getpop.org/wp-content/uploads/2017/12/js.png'
         />)
           return(<div className="displayProjects">
            {projects}
           </div>
         );
       }
     }
     else if(this.state.activeTap ===2){
       if(this.state.ReactProjects.length>=1){
         const projects = this.state.ReactProjects.map((item,i)=>
         <Projectdetails
         projectName={item.projectname.toUpperCase()}
         githubLink={item.githubLink}
         codepenLink={item.codepenLink}
         LivedemoLink={item.LivedemoLink}
         backgroundImage='https://uploads.getpop.org/wp-content/uploads/2017/12/js.png'
         />)
           return(<div className="displayProjects">
            {projects}
           </div>
         );
       }

     }
   }
   handleOpenDialog(){
     this.setState({
      openDialog: true
    });
   }
   handleCloseDialog(){
     this.setState({
      openDialog: false
    });
   }
   AddNewProject(){
     if(this.state.projectCategory==='ReactProjects'){
       let newArray = this.state.ReactProjects.concat(
      {projectname:this.state.projectName,githubLink:this.state.githubLink,codepenLink:this.state.codepenLink,LivedemoLink:this.state.LivedemoLink});
       localStorage.setItem('ReactProjects',JSON.stringify(newArray));
       this.setState({ReactProjects:newArray});
     }
     else if(this.state.projectCategory==='JavaScriptProjects'){
       let newArray = this.state.JavaScriptProjects.concat(
      {projectname:this.state.projectName,githubLink:this.state.githubLink,codepenLink:this.state.codepenLink,LivedemoLink:this.state.LivedemoLink});
       localStorage.setItem('JavaScriptProjects',JSON.stringify(newArray));
       this.setState({JavaScriptProjects:newArray});
     }
     else if(this.state.projectCategory==='JQuaryProjects'){
       let newArray = this.state.JQuaryProjects.concat(
      {projectname:this.state.projectName,githubLink:this.state.githubLink,codepenLink:this.state.codepenLink,LivedemoLink:this.state.LivedemoLink});
       localStorage.setItem('JQuaryProjects',JSON.stringify(newArray));
       this.setState({JQuaryProjects:newArray});
     }
   }
   render(){
     return(
       <div className="tabs">
       <Tabs activeTap={this.state.activeTap} onChange={(tabId)=> this.setState({activeTap:tabId})}>
       <Tab>API projects</Tab>
       <Tab>javascript/jQuary projects</Tab>
       <Tab>react projects</Tab>
       </Tabs>
        <section style={{marginTop:'30px'}}>
        {this.toggleCategories()}
        </section>
        <div style={{marginLeft:'40%',marginTop:'100px',color:'white'}}>
        <Button colored="true" className='addnewbutton' onClick={this.handleOpenDialog} raised ripple>Add New Project</Button>
        </div>
        <Dialog open={this.state.openDialog}>
           <DialogTitle>Add New Project</DialogTitle>
           <DialogContent>
           <Textfield required
              onChange={(event) => {this.setState({projectName:event.target.value})}}
              value={this.state.projectName}
              label="Add Project Name..."
              floatingLabel
              style={{width: '200px'}}
            />
            <Textfield
               onChange={(event) => {this.setState({projectCategory:event.target.value})}}
               label="Add Project Category..."
               floatingLabel
               style={{width: '200px'}}
             />
             <Textfield
                onChange={(event) => {this.setState({githubLink:event.target.value})}}
                label="Add github Link..."
                floatingLabel
                style={{width: '200px'}}
              />
              <Textfield
                 onChange={(event) => {this.setState({codepenLink:event.target.value})}}
                 label="Add Project codepen Link..."
                 floatingLabel
                 style={{width: '200px'}}
               />
               <Textfield
                  onChange={(event) => {this.setState({LivedemoLink:event.target.value})}}
                  label="Add Project Livedemo Link..."
                  floatingLabel
                  style={{width: '200px'}}
                />

           </DialogContent>
           <DialogActions fullWidth>
             <Button type='button' onClick={this.AddNewProject}>Add</Button>
             <Button type='button' onClick={this.handleCloseDialog}>close</Button>
           </DialogActions>
         </Dialog>
       </div>
     )
   }
 }
 export default Projects;
