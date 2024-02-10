import React, { Component } from 'react'
import Mist from '../images/mist.png'
import Rain from '../images/rain.png'
import Clear from '../images/clear.png'
import Haze from '../images/haze.png'
import Clouds from '../images/clouds.png'
import Snow from '../images/snow.png'
import Drizzle from '../images/drizzle.png'
import Fog from "../images/fog.png"
import Wind from "../images/wind.png"
import Thunderstorm from "../images/thunderstorm.png"

const weatherImages = {
    Clear: Clear,
    Haze: Haze,
    Clouds: Clouds,
    Snow: Snow,
    Rain: Rain,
    Drizzle: Drizzle,
    Mist: Mist,
    Fog: Fog,
    Thunderstorm: Thunderstorm,
    Smoke:Fog,
    Wind: Wind
};

export default class Weather extends Component {
    render() {
        let { temp, Feels_like, humidity, cityName, WT } = this.props;
        const weatherImage = weatherImages[WT];       
        return (
            <div>
                <div className="card" style={{width: "100%",Height:"100%",marginBottom:"15px" ,boxShadow:"0 2px 10px rgba(0,0,0,0.1)", borderColor:"white"}}>
                    <div className="card-body">
                        <h2 className="card-title" style={{textAlign:"center", fontFamily:"Newsreader",fontSize: "1.5rem", fontWeight: "revert", fontVariant: "small-caps" }}>Todays Weather</h2>
                        <h1 className="card-text" style={{textAlign:"center"}}>{temp} °C</h1>
                        <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>{cityName}</h6>
                        <div className='container' style={{textAlign:"center"}}>
                            {weatherImage && <img src={weatherImage} style={{ height: '100%', width: '60%' }} alt={WT} />}
                        </div>
                        <h4 className="card-text" style={{textAlign:"center"}}>{WT}</h4>

                        <div className='row' style={{marginTop:"35px"}}>
                        <div className='col-md-6'>
                        <h5 className="card-text" style={{textAlign:"center"}}>{Feels_like} °C</h5>
                        <p className="card-text" style={{textAlign:"center",fontFamily:"Newsreader"}}>Feels Like</p>
                        </div>
                        <div className='col-md-6'>
                        <h5 className="card-text" style={{textAlign:"center"}}>{humidity}%</h5>
                        <p className="card-text" style={{textAlign:"center",fontFamily:"Newsreader"}}>Humidity</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
