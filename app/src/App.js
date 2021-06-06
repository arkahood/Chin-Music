import { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Login from './components/login/Login';




class App extends Component{
  render(){
      return (
        
        <div className="App">
          <Header/>
          <div className='App1'>
          <Login/>
          </div>
        </div>
      );
  }
}

export default App;
