// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} 

class App extends React.Component{
  constructor(){
    super() ;
    this.state = {
       message : "Message before changes (from state)" 
    } ;
  this.updateMessage = this.updateMessage.bind(this) ;
  }

  updateMessage(){
    this.setState({
      message : "Message after events (from changed stated)"
    }, () => { 
      console.log('Callback value' , this.state.message) ;
    }) ;
  }

  render(){
    return <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div> ;
    
  }
}

class TestTwo extends React.Component{
  render(){
    return <React.Fragment>
      <h3> Two component in one page? Can we? </h3>
    </React.Fragment>
  }
}

class CountNum extends React.Component{
 constructor(){
   super() ;
   this.state = {
     count : 0
   }
   this.handleClick = this.handleClick.bind(this)
 }

 handleClick() {
  this.setState({
    count: this.state.count + 1 
  })
}

 render(){
   return(
     <React.Fragment>
       <button onClick={this.handleClick}> Click Number </button>
       <p>Total click : {this.state.count} </p>
     </React.Fragment>
   )
 }
} */

class Gryffindor extends React.Component{
  constructor(){
    super() ;
    this.state = {
      msg : ""
    }
  this.changeText = this.changeText.bind(this) ;
  }

  changeText(){
    this.setState({
      msg : "brave courage and determination"
    })
  }

  render(){
    var fontStyle = {
      fontSize : 25 
    }
    return(
      <React.Fragment>
         <a onClick={this.changeText}> Gryffindor </a>
         <p style={fontStyle}>{this.state.msg}</p>
      </React.Fragment>
    )
  }
}

/* const Slytherin = () => {
  return <h1>Slytherin pride</h1>
} */

export default Gryffindor ;
