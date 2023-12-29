import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        let { title, description, ImgUrl, url, date } = this.props;
        return (
            <div className='cards'style={{paddingBottom:"30px"}}>
                <div className="card" style={{maxwidth: "540px", height:"100%", borderColor:"white"}}>
                    <div className="row ">
                    <div className="col-md-6" style={{ flex: "60%" }}>
                            <img src={ImgUrl} style={{ width: "100%", height: "100%", objectFit: "cover" }} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6" style={{ flex: "40%"}}>
                            <div className="card-body" style={{paddingLeft:"0px",paddingTop:"2px"}}>
                                <h5 className="card-title" style={{ fontFamily: "Newsreader", fontWeight:"600",fontSize:"170%" }} >{title}</h5>
                                <p className="card-text" style={{ fontFamily: "Newsreader" }}>{description}</p>
                                <p className="card-text" style={{ fontSize: "small", fontFamily: "serif" }} >{date}</p>
                                <a href={url} className="btn btn-outline-primary" style={{ fontFamily: "Newsreader" }}>Read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
