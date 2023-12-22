import React, { Component } from 'react'
import NewsCard from './NewsCrad'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3 mx-6'>
        <NewsCard />
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </div>
    )
  }
}
