import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes ,
  Route
  
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

state={
  progress:0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}


  render() {
    return (
      <div>
      
      <Navbar/>

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
  
      />
      
     
<Router>
      <Routes>

        pageSize=2;

        <Route exact path="/news"
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"general"}/>}/>

        <Route exact path="/general"
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"general"}/>}/>
        
        <Route exact path='/business'
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"business"}/>}/>

        <Route exact path='/entertainment'
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"entertainment"}/>}/>

        <Route exact path="/health"
        element={ <News setProgress={this.setProgress} country={"sa"}   pageSize={6} category={"health"}/>}/>
        
        <Route exact path='/sports'
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"sports"}/>}/>

        <Route exact path='/science'
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"science"}/>}/>

        <Route exact path='technology'
        element={ <News setProgress={this.setProgress} country={"us"}   pageSize={6} category={"technology"}/>}/>


       

       </Routes>
</Router>

          
      
      </div>
    )
  }
}

