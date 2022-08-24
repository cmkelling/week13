import './App.css';
import React, {Component} from 'react'
import NavigationBar from './NavigationBar'
import Login from './Login'

export default class App extends Component {
  render() {
    return(
      <div className='container'>
        <div className='row'>
          <NavigationBar/>
        </div>
        <br></br> <br></br>
        <div className='card'>
          <Login/>
        </div>
      </div>
      
    )
  }
}
