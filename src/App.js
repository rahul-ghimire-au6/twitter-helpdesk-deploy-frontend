import React, { Component, Fragment } from 'react'
import './App.css'
import twitter1 from './assests/img/a.jpg'

export default class App extends Component {
  
  handleClick=(e)=>{
    window.location.href='https://twitter-159.herokuapp.com/twitter'
    return null
  }

  render() {
    return (
      <Fragment>
        <div style={{display:'flex'}}>
        <div><center><img src={twitter1} alt='twitter wallpaper' className='twitter_img'/></center></div>
        <div className='twitter-heading-container'>
        <center><h1 className='twitter_heading'>Welcome to twitter client</h1></center><br/>        
        <center><button onClick={this.handleClick} className='tweetbutton'>click me to login in twitter</button></center>
        </div>
        </div>   
      </Fragment>
    )
  }
}
