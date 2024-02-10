import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Components/About';
import Horoscope from './Components/Horoscope';


export default class App extends Component { 
  newsapi=process.env.KEY1
  weatherapi=process.env.KEY2

  
  
  render() {
    return (
      <div>
        <Router>
          <div className='container'>
          <Navbar/>
          <Routes><Route exact path="/" element={<News category="general" />} /></Routes>
        
          {/* <Routes><Route exact path="/in" element={<News  Napi={this.newsapi} country="in" />} /></Routes>
          <Routes><Route exact path="/cn" element={<News  Napi={this.newsapi} country="cn" />} /></Routes>
          <Routes><Route exact path="/spanish" element={<News language="es" />} /></Routes>
          <Routes><Route exact path="/de" element={<News  Napi={this.newsapi} country="de" />} /></Routes>
          <Routes><Route exact path="/au" element={<News  Napi={this.newsapi} country="au" />} /></Routes>
          <Routes><Route exact path="/sa" element={<News  Napi={this.newsapi} country="sa" />} /></Routes> */}


          

          <Routes><Route exact path="/us/sports" element={<News  Napi={this.newsapi} country="us" category="sports" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/science" element={<News  Napi={this.newsapi} country="us" category="science" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/health" element={<News  Napi={this.newsapi} country="us" category="health" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/business" element={<News  Napi={this.newsapi} country="us" category="business" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/technology" element={<News  Napi={this.newsapi} country="us" category="technology" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/entertainment" element={<News  Napi={this.newsapi} country="us" category="entertainment" />} /></Routes>


          <Routes><Route exact path="/in/sports" element={<News  Napi={this.newsapi} country="in" category="sports" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/science" element={<News  Napi={this.newsapi} country="in" category="science" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/health" element={<News  Napi={this.newsapi} country="in" category="health" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/business" element={<News  Napi={this.newsapi} country="in" category="business" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/technology" element={<News  Napi={this.newsapi} country="in" category="technology" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/entertainment" element={<News  Napi={this.newsapi} country="in" category="entertainment" city="Mumbai"/>} /></Routes>

          <Routes><Route exact path="/gb/sports" element={<News  Napi={this.newsapi} country="gb" category="sports" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/science" element={<News  Napi={this.newsapi} country="gb" category="science" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/health" element={<News  Napi={this.newsapi} country="gb" category="health"/>} city="London"/></Routes>
          <Routes><Route exact path="/gb/business" element={<News  Napi={this.newsapi} country="gb" category="business" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/technology" element={<News  Napi={this.newsapi} country="gb" category="technology" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/entertainment" element={<News  Napi={this.newsapi} country="gb" category="entertainment" city="London"/>} /></Routes>

          <Routes><Route exact path="/de/sports" element={<News  Napi={this.newsapi} country="de" category="sports" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/science" element={<News  Napi={this.newsapi} country="de" category="science" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/health" element={<News  Napi={this.newsapi} country="de" category="health" />} city="Berlin"/></Routes>
          <Routes><Route exact path="/de/business" element={<News  Napi={this.newsapi} country="de" category="business" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/technology" element={<News  Napi={this.newsapi} country="de" category="technology" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/entertainment" element={<News  Napi={this.newsapi} country="de" category="entertainment" city="Berlin"/>} /></Routes>

          <Routes><Route exact path="/au/sports" element={<News  Napi={this.newsapi} country="au" category="sports" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/science" element={<News  Napi={this.newsapi} country="au" category="science" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/health" element={<News  Napi={this.newsapi} country="au" category="health" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/business" element={<News  Napi={this.newsapi} country="au" category="business" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/technology" element={<News  Napi={this.newsapi} country="au" category="technology" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/entertainment" element={<News  Napi={this.newsapi} country="au" category="entertainment" city="Sydney"/>} /></Routes>

          <Routes><Route exact path="/cn/sports" element={<News  Napi={this.newsapi} country="cn" category="sports" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/science" element={<News  Napi={this.newsapi} country="cn" category="science" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/health" element={<News  Napi={this.newsapi} country="cn" category="health" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/business" element={<News  Napi={this.newsapi} country="cn" category="business" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/technology" element={<News  Napi={this.newsapi} country="cn" category="technology" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/entertainment" element={<News  Napi={this.newsapi} country="cn" category="entertainment" city="Beijing"/>} /></Routes>

          <Routes><Route exact path="/sa/sports" element={<News  Napi={this.newsapi} country="sa" category="sports" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/science" element={<News  Napi={this.newsapi} country="sa" category="science" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/health" element={<News  Napi={this.newsapi} country="sa" category="health" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/business" element={<News  Napi={this.newsapi} country="sa" category="business" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/technology" element={<News  Napi={this.newsapi} country="sa" category="technology" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/entertainment" element={<News  Napi={this.newsapi} country="sa" category="entertainment" city="Riyadh"/>} /></Routes>
          
          <Routes><Route exact path="/us/spnish" element={<News  Napi={this.newsapi} country="us" category="sports" language="de"/>} /></Routes>

          </div>
          <div className='container'>
           <Routes><Route exact path="/about" element={<About/>} /></Routes>
          </div>
        </Router>
      </div>
    )
  }
}

