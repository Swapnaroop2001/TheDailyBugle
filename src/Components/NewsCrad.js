import React, { Component } from 'react'
export default class NewsCard extends Component {
    render() {
        let { title, description, ImgUrl, url, date } = this.props;
        return (
            <div className='cards'style={{ height:"100%",width:"100%", marginBottom:"15px",paddingBottom:"15px",borderBottom: "2px solid #ccc"}}>
                    <div className="row ">
                    <div className="col-md-5" >
                            <div className="card-body " style={{paddingLeft:"0px",paddingTop:"2px"}}>
                                <h5 className="card-title" style={{ fontFamily: "Newsreader", fontWeight:"600",fontSize:"145%" }} >{title}</h5>
                                <p className="card-text" style={{ fontFamily: "Newsreader" }}>{description}</p>
                                <p className="card-text" style={{ fontSize: "small", fontFamily: "serif" }} >{date}</p>
                                <a href={url} className="btn btn-outline-dark" style={{ fontFamily: "Newsreader" }}>Read more...</a>
                            </div>
                    </div >
                    <div className="col-md-7" style={{ padding:"2px 2px", marginLeft:"-7px", boxShadow:"0 2px 10px rgba(0,0,0,0.2)"}} >
                        <img className="card-img " src={ImgUrl} style={{ width: "100%", height: "100%",borderRadius:"0px", objectFit: "cover" }}  alt="..."/>
                    </div>
                    </div>
               
            </div>
        )
    }
}
