import React, { Component } from 'react'

export default class NewscardType2 extends Component {
  render() {
    let { title, description, ImgUrl, url, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", paddingLeft:"0px",paddingTop:"0px", paddingBottom:"20px", borderColor:"white"}}>
                    <img src={ImgUrl} style={{borderRadius:"0px"}} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ backgroundColor: "white",padding:"10px 5px 12px 5px" }}>
                        <h4 className="card-title" style={{  fontFamily: "Newsreader", fontWeight:"600",fontSize:"100%" }}>{title}...</h4>
                        <p className="card-text" style={{ fontFamily: 'Newsreader' }}>{description}</p>
                        <p className="card-text" style={{ fontSize: "small", fontFamily: "serif" }} >{date}</p>
                        <a href={url} className="btn btn-outline-primary">Read more...</a>
                    </div>
                </div>
      </div>
    )
  }
}
