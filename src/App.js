import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Carousel from './Components/Carousel';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News category="sports"/>
      </div>
    )
  }
}

