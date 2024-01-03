import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default class App extends Component {  
  render() {
    return (
      <div>
        <Router>
          <div className='container'>
          <Navbar/>
          <Routes><Route exact path="/" element={<News category="general" />} /></Routes>
          <Routes><Route exact path="/sports" element={<News category="sports"/>} /></Routes>
          <Routes><Route exact path="/technology" element={<News category="technology" />} /></Routes>
          <Routes><Route exact path="/health" element={<News category="health"/>} /></Routes>
          <Routes><Route exact path="/science" element={<News category="science" />} /></Routes>
          <Routes><Route exact path="/business" element={<News category="business" />} /></Routes>
          <Routes><Route exact path="/entertainment" element={<News category="entertainment" />} /></Routes>


          {/* <Routes><Route exact path="/in" element={<News country="in" />} /></Routes>
          <Routes><Route exact path="/cn" element={<News country="cn" />} /></Routes>
          <Routes><Route exact path="/spanish" element={<News language="es" />} /></Routes>
          <Routes><Route exact path="/de" element={<News country="de" />} /></Routes>
          <Routes><Route exact path="/au" element={<News country="au" />} /></Routes>
          <Routes><Route exact path="/sa" element={<News country="sa" />} /></Routes> */}


          <Routes><Route exact path="/us/sports" element={<News country="us" category="sports" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/science" element={<News country="us" category="science" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/health" element={<News country="us" category="health" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/business" element={<News country="us" category="business" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/technology" element={<News country="us" category="technology" city="New York"/>} /></Routes>
          <Routes><Route exact path="/us/entertainment" element={<News country="us" category="entertainment" />} /></Routes>


          <Routes><Route exact path="/in/sports" element={<News country="in" category="sports" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/science" element={<News country="in" category="science" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/health" element={<News country="in" category="health" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/business" element={<News country="in" category="business" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/technology" element={<News country="in" category="technology" city="Mumbai"/>} /></Routes>
          <Routes><Route exact path="/in/entertainment" element={<News country="in" category="entertainment" city="Mumbai"/>} /></Routes>

          <Routes><Route exact path="/gb/sports" element={<News country="gb" category="sports" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/science" element={<News country="gb" category="science" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/health" element={<News country="gb" category="health"/>} city="London"/></Routes>
          <Routes><Route exact path="/gb/business" element={<News country="gb" category="business" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/technology" element={<News country="gb" category="technology" city="London"/>} /></Routes>
          <Routes><Route exact path="/gb/entertainment" element={<News country="gb" category="entertainment" city="London"/>} /></Routes>

          <Routes><Route exact path="/de/sports" element={<News country="de" category="sports" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/science" element={<News country="de" category="science" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/health" element={<News country="de" category="health" />} city="Berlin"/></Routes>
          <Routes><Route exact path="/de/business" element={<News country="de" category="business" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/technology" element={<News country="de" category="technology" city="Berlin"/>} /></Routes>
          <Routes><Route exact path="/de/entertainment" element={<News country="de" category="entertainment" city="Berlin"/>} /></Routes>

          <Routes><Route exact path="/au/sports" element={<News country="au" category="sports" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/science" element={<News country="au" category="science" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/health" element={<News country="au" category="health" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/business" element={<News country="au" category="business" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/technology" element={<News country="au" category="technology" city="Sydney"/>} /></Routes>
          <Routes><Route exact path="/au/entertainment" element={<News country="au" category="entertainment" city="Sydney"/>} /></Routes>

          <Routes><Route exact path="/cn/sports" element={<News country="cn" category="sports" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/science" element={<News country="cn" category="science" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/health" element={<News country="cn" category="health" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/business" element={<News country="cn" category="business" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/technology" element={<News country="cn" category="technology" city="Beijing"/>} /></Routes>
          <Routes><Route exact path="/cn/entertainment" element={<News country="cn" category="entertainment" city="Beijing"/>} /></Routes>

          <Routes><Route exact path="/sa/sports" element={<News country="sa" category="sports" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/science" element={<News country="sa" category="science" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/health" element={<News country="sa" category="health" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/business" element={<News country="sa" category="business" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/technology" element={<News country="sa" category="technology" city="Riyadh"/>} /></Routes>
          <Routes><Route exact path="/sa/entertainment" element={<News country="sa" category="entertainment" city="Riyadh"/>} /></Routes>
          
          <Routes><Route exact path="/us/spnish" element={<News country="us" category="sports" language="de"/>} /></Routes>

          </div>
        </Router>
      </div>
    )
  }
}

