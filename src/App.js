import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Carousel from './Components/Carousel';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes><Route exact path="/" element={<News category="general" />} /></Routes>
          <Routes><Route exact path="/sports" element={<News category="sports" />} /></Routes>
          <Routes><Route exact path="/technology" element={<News category="technology" />} /></Routes>
          <Routes><Route exact path="/health" element={<News category="health" />} /></Routes>
          <Routes><Route exact path="/science" element={<News category="science" />} /></Routes>
          <Routes><Route exact path="/business" element={<News category="business" />} /></Routes>
          <Routes><Route exact path="/entertainment" element={<News category="entertainment" />} /></Routes>
        </Router>
      </div>
    )
  }
}

