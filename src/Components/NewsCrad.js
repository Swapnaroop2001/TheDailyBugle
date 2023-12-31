import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        let { title, description, ImgUrl, url, date } = this.props;
        return (
            <div className='cards'style={{marginBottom:"15px",paddingBottom:"15px",borderBottom: "2px solid #ccc"}}>
                <div className="card" style={{maxwidth: "540px", height:"100%", borderColor:"white", marginRight:"6px"}}>
                    <div className="row ">
                    <div className="col-md-5" >
                    <div className="card-body" style={{paddingLeft:"0px",paddingTop:"2px"}}>
                                <h5 className="card-title" style={{ fontFamily: "Newsreader", fontWeight:"600",fontSize:"145%" }} >{title}</h5>
                                <p className="card-text" style={{ fontFamily: "Newsreader" }}>{description}</p>
                                <p className="card-text" style={{ fontSize: "small", fontFamily: "serif" }} >{date}</p>
                                <a href={url} className="btn btn-outline-primary" style={{ fontFamily: "Newsreader" }}>Read more...</a>
                            </div>
                        </div>
                        <div className="col-md-7" style={{ padding:"0px 0px", marginLeft:"-10px", boxShadow:"0 2px 10px rgba(0,0,0,0.2)"}} >
                        <img src={ImgUrl} style={{ width: "100%", height: "100%",borderRadius:"0px", objectFit: "cover" }} className="card-img" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
