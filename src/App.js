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
  key1=process.env.KEY_1
  key2=process.env.KEY_2
  
  render() {
    return (
      <div>
        <Router>
          <div className='container'>
          <Navbar/>
          <Routes><Route exact path="/" element={<News category="general" />} /></Routes>
        
          {/* <Routes><Route exact path="/in" element={<News Key2={this.key2} country="in" />} /></Routes>
          <Routes><Route exact path="/cn" element={<News Key2={this.key2} country="cn" />} /></Routes>
          <Routes><Route exact path="/spanish" element={<News language="es" />} /></Routes>
          <Routes><Route exact path="/de" element={<News Key2={this.key2} country="de" />} /></Routes>
          <Routes><Route exact path="/au" element={<News Key2={this.key2} country="au" />} /></Routes>
          <Routes><Route exact path="/sa" element={<News Key2={this.key2} country="sa" />} /></Routes> */}


          

          <Routes><Route exact path="/us/sports" element={<News Key2={this.key2} country="us" category="sports" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/science" element={<News Key2={this.key2} country="us" category="science" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/health" element={<News Key2={this.key2} country="us" category="health" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/business" element={<News Key2={this.key2} country="us" category="business" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/technology" element={<News Key2={this.key2} country="us" category="technology" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/entertainment" element={<News Key2={this.key2} country="us" category="entertainment" />} /></Routes>


          <Routes><Route exact path="/in/sports" element={<News Key2={this.key2} country="in" category="sports" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/science" element={<News Key2={this.key2} country="in" category="science" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/health" element={<News Key2={this.key2} country="in" category="health" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/business" element={<News Key2={this.key2} country="in" category="business" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/technology" element={<News Key2={this.key2} country="in" category="technology" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/entertainment" element={<News Key2={this.key2} country="in" category="entertainment" city="Mumbai"/>} /></Routes>

          <Routes><Route exact path="/gb/sports" element={<News Key2={this.key2} country="gb" category="sports" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/science" element={<News Key2={this.key2} country="gb" category="science" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/health" element={<News Key2={this.key2} country="gb" category="health"/>} city="London"/></Routes>
          <Routes><Route exact path="/gb/business" element={<News Key2={this.key2} country="gb" category="business" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/technology" element={<News Key2={this.key2} country="gb" category="technology" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/entertainment" element={<News Key2={this.key2} country="gb" category="entertainment" city="London"/>} /></Routes>

          <Routes><Route exact path="/de/sports" element={<News Key2={this.key2} country="de" category="sports" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/science" element={<News Key2={this.key2} country="de" category="science" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/health" element={<News Key2={this.key2} country="de" category="health" />} city="Berlin"/></Routes>
          <Routes><Route exact path="/de/business" element={<News Key2={this.key2} country="de" category="business" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/technology" element={<News Key2={this.key2} country="de" category="technology" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/entertainment" element={<News Key2={this.key2} country="de" category="entertainment" city="Berlin"/>} /></Routes>

          <Routes><Route exact path="/au/sports" element={<News Key2={this.key2} country="au" category="sports" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/science" element={<News Key2={this.key2} country="au" category="science" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/health" element={<News Key2={this.key2} country="au" category="health" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/business" element={<News Key2={this.key2} country="au" category="business" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/technology" element={<News Key2={this.key2} country="au" category="technology" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/entertainment" element={<News Key2={this.key2} country="au" category="entertainment" city="Sydney"/>} /></Routes>

          <Routes><Route exact path="/cn/sports" element={<News Key2={this.key2} country="cn" category="sports" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/science" element={<News Key2={this.key2} country="cn" category="science" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/health" element={<News Key2={this.key2} country="cn" category="health" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/business" element={<News Key2={this.key2} country="cn" category="business" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/technology" element={<News Key2={this.key2} country="cn" category="technology" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/entertainment" element={<News Key2={this.key2} country="cn" category="entertainment" city="Beijing"/>} /></Routes>

          <Routes><Route exact path="/sa/sports" element={<News Key2={this.key2} country="sa" category="sports" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/science" element={<News Key2={this.key2} country="sa" category="science" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/health" element={<News Key2={this.key2} country="sa" category="health" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/business" element={<News Key2={this.key2} country="sa" category="business" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/technology" element={<News Key2={this.key2} country="sa" category="technology" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/entertainment" element={<News Key2={this.key2} country="sa" category="entertainment" city="Riyadh"/>} /></Routes>
          
          <Routes><Route exact path="/us/spnish" element={<News Key2={this.key2} country="us" category="sports" language="de"/>} /></Routes>

          </div>
          <div className='container'>
           <Routes><Route exact path="/about" element={<About/>} /></Routes>
           <Routes><Route exact path="/horoscope" element={<Horoscope/>} /></Routes>
          </div>
        </Router>
      </div>
    )
  }
}

