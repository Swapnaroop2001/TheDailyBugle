import React, { Component } from 'react'
import NewsCard from './NewsCrad'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps={
        country:"in",
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        category:PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            A: [],
            page: 1,
            currentDate: new Date(),
            TR: 0
        }
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&category=${this.props.category}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            TR: ParsedData.totalResults
        })
    }


    NextBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&category=${this.props.category}&page=${this.state.page+1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page + 1
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto' // For smooth scrolling
          });
    }

    PrevBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&category=${this.props.category}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page - 1
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto' // For smooth scrolling
          });
    }


    render() {
        return (
            <div className='container'>
                <hr></hr>
                <div className='row'>
                    {this.state.A.map((Element) => {
                        if (Element.url === "https://removed.com") {
                            return null;
                        } else {
                            return <div className='col md-3' key={Element.url}>
                                <NewsCard title={Element.title ? Element.title.slice(0, 45) : " "}
                                    description={Element.description ? Element.description.slice(0, 95) + "..." : " "}
                                    ImgUrl={Element.urlToImage ? Element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                                    url={Element.url}
                                    date={Element.publishedAt.slice(5, 10) + "-" + Element.publishedAt.slice(0, 4)}
                                />
                            </div>
                        }
                    })}
                </div>

                <div className='container' style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === 1} onClick={this.PrevBtn}>Previous</button>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === (Math.ceil(this.state.TR / 16))} onClick={this.NextBtn}>Next page..</button>
                </div>


            </div>
        )
    }
}
