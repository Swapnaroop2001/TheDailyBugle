import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        let { temp, Feels_like, humidity, cityName, WT } = this.props;
        return (
            <div>
                <div className="card" style={{width: "100%",Height:"100%",marginBottom:"15px" ,boxShadow:"0 2px 10px rgba(0,0,0,0.1)", borderColor:"white"}}>
                    <div className="card-body">

                        <h3 className="card-title" style={{textAlign:"center", fontFamily:"Newsreader"}}>Todays Weather</h3>
                        <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{cityName}</h6>
                        <h1 className="card-text" style={{textAlign:"center"}}>{temp} °C</h1>
                        <h4 className="card-text" style={{textAlign:"center"}}>{WT}</h4>

                        <div className='row'>
                        <div className='col-md-4'>
                        <h5 className="card-text" style={{textAlign:"center"}}>{Feels_like} °C</h5>
                        <p className="card-text" style={{textAlign:"center",fontFamily:"Newsreader"}}>Feels Like</p>
                        </div>
                        <div className='col-md-4'>
                        <h5 className="card-text" style={{textAlign:"center"}}>{humidity}%</h5>
                        <p className="card-text" style={{textAlign:"center",fontFamily:"Newsreader"}}>Humidity</p>
                        </div>
                        <div className='col-md-4'>
                        <h5 className="card-text" style={{textAlign:"center"}}>{Feels_like}</h5>
                        <p className="card-text" style={{textAlign:"center",fontFamily:"Newsreader"}}>Wind speed</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
