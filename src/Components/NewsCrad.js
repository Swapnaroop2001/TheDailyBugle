import React, { Component } from 'react'

export default class NewsCard extends Component {
    render() {
        let { title, description, ImgUrl, url, date } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem"}}>
                    <img src={ImgUrl} className="card-img-top"  alt="..." />
                    <div className="card-body" style={{backgroundColor:"#f6f6f8"}}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text" style={{fontFamily:'serif'}}>{description}</p>
                        <p className="card-text" style={{fontSize:"small", fontFamily:"serif"}} >{date}</p>
                        <a href={url} className="btn btn-outline-primary">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
