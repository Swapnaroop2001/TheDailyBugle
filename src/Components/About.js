import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
      <div className="container" style={{fontFamily:"Newsreader", textAlign:"center"}}>
      <h1 style={{fontWeight:"600"}}>About Me</h1>

      <div className="about-section">
        <h3>
           Hello, My name is Swapnaroop. 
        </h3>
        <p>
          I am a driven and innovative aspiring Computer Software Engineer pursuing my Master's at Stevens Institute of Technology.
        </p>
      </div>

      {/* Add other sections or content as needed */}
    </div>
      </div>
    )
  }
}
