import React, { Component } from 'react'
import NewsCard from './NewsCrad'
import PropTypes from 'prop-types'
import NewscardType2 from './NewscardType2'
export default class News extends Component {


    static defaultProps = {
        country: "us",
        category: 'general',
        language: "en"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        language: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            loading: true,
            A: [],
            page: 1,
            currentDate: new Date(),
            TR: 0
        }
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
        let data = await fetch(url)
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            TR: ParsedData.totalResults,
            loading: false
        })
    }


    NextBtn = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page + 1,
            loading: false
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    PrevBtn = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }


    render() {
        const articleArray = [];
        const newsCards = [];
        const newsCards2 = [];
        const PlaceHolder = [];

        for (let i = 0; i < this.state.A.length; i++) {
            const elem = this.state.A[i];
            if (elem.url === "https://removed.com") {
                continue;
            }
            else {
                articleArray.push(elem);
            }
        }

        // Horizontal Card
        for (let i = 0; i < Math.ceil(((articleArray.length) * 14) / 25); i++) {
            const Element = articleArray[i];
            if (Element.url === "https://removed.com") {
                continue;
            } else {
                newsCards.push(
                    <div className='col md-3' key={Element.url}>
                        <NewsCard
                            key={Element.url}
                            title={Element.title ? Element.title.slice(0, 200) : " "}
                            description={Element.description ? Element.description.slice(0, 500) + "..." : " "}
                            ImgUrl={Element.urlToImage ? Element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                            url={Element.url}
                            date={Element.publishedAt.slice(5, 10) + "-" + Element.publishedAt.slice(0, 4)}
                        />
                    </div>
                );
            }
        }

        // Verticle Card
        for (let i = Math.ceil(((articleArray.length) * 14) / 25); i < articleArray.length; i++) {
            const element = articleArray[i];
            if (element.url === "https://removed.com") {
                continue;
            } else {
                newsCards2.push(
                    <div className='col md-3' key={element.url}>
                        <NewscardType2
                            key={element.url}
                            title={element.title ? element.title.slice(0, 60) : " "}
                            description={element.description ? element.description.slice(0, 150) + "..." : " "}
                            ImgUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                            url={element.url}
                            date={element.publishedAt.slice(5, 10) + "-" + element.publishedAt.slice(0, 4)}
                        />
                    </div>
                );

                PlaceHolder.push(
                    <div class="card" aria-hidden="true" style={{ borderColor: "white" }}>
                        <div style={{ height: "200px", backgroundColor: "#d4d4d4" }}>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className='newssection'>
                <div className='sections' style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div className='row'>
                        <hr></hr>
                        <div className='col-md-9' style={{ float: "left", borderRight: "2px solid #ccc", paddingLeft: "-5px" }}>
                            {newsCards}
                        </div>
                        <div className='col-md-3'>
                            {this.state.loading ? PlaceHolder : newsCards2}
                        </div>
                    </div>
                </div>

                <div className='container' style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === 1} onClick={this.PrevBtn}>Previous</button>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === (Math.ceil(this.state.TR / 16))} onClick={this.NextBtn}>Next page..</button>
                </div>
            </div>
        );
    }
}