import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import Footer from './Components/Footer';

export default class App extends Component {  
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes><Route exact path="/" element={<News category="general" />} /></Routes>
          <Routes><Route exact path="/sports" element={<News category="sports"/>} /></Routes>
          <Routes><Route exact path="/technology" element={<News category="technology" />} /></Routes>
          <Routes><Route exact path="/health" element={<News category="health"/>} /></Routes>
          <Routes><Route exact path="/science" element={<News category="science" />} /></Routes>
          <Routes><Route exact path="/business" element={<News category="business" />} /></Routes>
          <Routes><Route exact path="/entertainment" element={<News category="entertainment" />} /></Routes>


          <Routes><Route exact path="/in" element={<News country="in" />} /></Routes>
          <Routes><Route exact path="/cn" element={<News country="cn" />} /></Routes>
          <Routes><Route exact path="/gb" element={<News country="gb" />} /></Routes>
          <Routes><Route exact path="/de" element={<News country="de" />} /></Routes>
          <Routes><Route exact path="/au" element={<News country="au" />} /></Routes>
          <Routes><Route exact path="/sa" element={<News country="sa" />} /></Routes>


          <Routes><Route exact path="/us/sports" element={<News country="us" category="sports" />} /></Routes>
          <Routes><Route exact path="/us/business" element={<News country="us" category="business" />} /></Routes>
          <Routes><Route exact path="/us/science" element={<News country="us" category="science" />} /></Routes>
          <Routes><Route exact path="/us/health" element={<News country="us" category="health" />} /></Routes>
          <Routes><Route exact path="/us/business" element={<News country="us" category="business" />} /></Routes>
          <Routes><Route exact path="/us/technology" element={<News country="us" category="technology" />} /></Routes>
          <Routes><Route exact path="/us/entertainment" element={<News country="us" category="entertainment" />} /></Routes>


          <Routes><Route exact path="/in/sports" element={<News country="in" category="sports" />} /></Routes>
          <Routes><Route exact path="/in/business" element={<News country="in" category="business" />} /></Routes>
          <Routes><Route exact path="/in/science" element={<News country="in" category="science" />} /></Routes>
          <Routes><Route exact path="/in/health" element={<News country="in" category="health" />} /></Routes>
          <Routes><Route exact path="/in/business" element={<News country="in" category="business" />} /></Routes>
          <Routes><Route exact path="/in/technology" element={<News country="in" category="technology" />} /></Routes>
          <Routes><Route exact path="/in/entertainment" element={<News country="in" category="entertainment" />} /></Routes>

          <Routes><Route exact path="/gb/sports" element={<News country="gb" category="sports" />} /></Routes>
          <Routes><Route exact path="/gb/business" element={<News country="gb" category="business" />} /></Routes>
          <Routes><Route exact path="/gb/science" element={<News country="gb" category="science" />} /></Routes>
          <Routes><Route exact path="/gb/health" element={<News country="gb" category="health" />} /></Routes>
          <Routes><Route exact path="/gb/business" element={<News country="gb" category="business" />} /></Routes>
          <Routes><Route exact path="/gb/technology" element={<News country="gb" category="technology" />} /></Routes>
          <Routes><Route exact path="/gb/entertainment" element={<News country="gb" category="entertainment" />} /></Routes>

          <Routes><Route exact path="/de/sports" element={<News country="de" category="sports" />} /></Routes>
          <Routes><Route exact path="/de/business" element={<News country="de" category="business" />} /></Routes>
          <Routes><Route exact path="/de/science" element={<News country="de" category="science" />} /></Routes>
          <Routes><Route exact path="/de/health" element={<News country="de" category="health" />} /></Routes>
          <Routes><Route exact path="/de/business" element={<News country="de" category="business" />} /></Routes>
          <Routes><Route exact path="/de/technology" element={<News country="de" category="technology" />} /></Routes>
          <Routes><Route exact path="/de/entertainment" element={<News country="de" category="entertainment" />} /></Routes>

          <Routes><Route exact path="/au/sports" element={<News country="au" category="sports" />} /></Routes>
          <Routes><Route exact path="/au/business" element={<News country="au" category="business" />} /></Routes>
          <Routes><Route exact path="/au/science" element={<News country="au" category="science" />} /></Routes>
          <Routes><Route exact path="/au/health" element={<News country="au" category="health" />} /></Routes>
          <Routes><Route exact path="/au/business" element={<News country="au" category="business" />} /></Routes>
          <Routes><Route exact path="/au/technology" element={<News country="au" category="technology" />} /></Routes>
          <Routes><Route exact path="/au/entertainment" element={<News country="au" category="entertainment" />} /></Routes>

          <Routes><Route exact path="/cn/sports" element={<News country="cn" category="sports" />} /></Routes>
          <Routes><Route exact path="/cn/business" element={<News country="cn" category="business" />} /></Routes>
          <Routes><Route exact path="/cn/science" element={<News country="cn" category="science" />} /></Routes>
          <Routes><Route exact path="/cn/health" element={<News country="cn" category="health" />} /></Routes>
          <Routes><Route exact path="/cn/business" element={<News country="cn" category="business" />} /></Routes>
          <Routes><Route exact path="/cn/technology" element={<News country="cn" category="technology" />} /></Routes>
          <Routes><Route exact path="/cn/entertainment" element={<News country="cn" category="entertainment" />} /></Routes>

          <Routes><Route exact path="/sa/sports" element={<News country="sa" category="sports" />} /></Routes>
          <Routes><Route exact path="/sa/business" element={<News country="sa" category="business" />} /></Routes>
          <Routes><Route exact path="/sa/science" element={<News country="sa" category="science" />} /></Routes>
          <Routes><Route exact path="/sa/health" element={<News country="sa" category="health" />} /></Routes>
          <Routes><Route exact path="/sa/business" element={<News country="sa" category="business" />} /></Routes>
          <Routes><Route exact path="/sa/technology" element={<News country="sa" category="technology" />} /></Routes>
          <Routes><Route exact path="/sa/entertainment" element={<News country="sa" category="entertainment" />} /></Routes>
          
          <Routes><Route exact path="/us/spnish" element={<News country="us" category="sports" language="de"/>} /></Routes>

          
        </Router>
      </div>
    )
  }
}

