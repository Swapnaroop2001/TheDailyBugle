import React, { Component } from 'react';

export default class NewscardType2 extends Component {
  render() {
    let { title, description, ImgUrl, url, date } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "100%",height:"100%", marginLeft:"0px",marginTop:"0px", marginBottom:"20px", borderColor:"white",borderBottom: "2px solid #ccc"}}>
          <div style={{padding:"2px 2px",boxShadow:"0 2px 10px rgba(0,0,0,0.2)"}}>
            <img src={ImgUrl} style={{width:"100%",height:"100%",borderRadius:"0px",objectFit:"cover"}} className="card-img-top" alt="..." />
          </div>
            <div className="card-body" style={{ backgroundColor: "white",padding:"10px 5px 12px 5px" }}>
                <h4 className="card-title" style={{  fontFamily: "Newsreader", fontWeight:"600",fontSize:"120%" }}>{title}...</h4>
                <p className="card-text" style={{ fontFamily: 'Newsreader' }}>{description}</p>
                <p className="card-text" style={{ fontSize: "small", fontFamily: "serif" }} >{date}</p>
                <a href={url} className="btn btn-outline-dark">Read more...</a>
            </div>
        </div>
      </div>
    )
  }
}
