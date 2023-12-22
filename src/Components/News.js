import React, { Component } from 'react'
import NewsCard from './NewsCrad'

export default class News extends Component {
    render() {
        return (
            <div className='container'>
                <h1 style={{textAlign:"center"}}>Top Headlines</h1>
                <div className='row'>
                    <div className='col md-3'>
                        <NewsCard title="Hello" description="Hey its apple!" />
                    </div>

                    <div className='col md-3'>
                        <NewsCard title="Hello" description="Hey its apple!" />
                    </div>

                    <div className='col md-3'>
                        <NewsCard title="Hello" description="Hey its apple!" />
                    </div>

                    <div className='col md-3'>
                        <NewsCard title="Hello" description="Hey its apple!" />
                    </div>
                </div>
            </div>
        )
    }
}
