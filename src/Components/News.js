import React, { Component } from 'react'
import NewsCard from './NewsCrad'
import PropTypes from 'prop-types'
import NewscardType2 from './NewscardType2'
import Weather from './Weather'
import Placeholders1 from './Placeholders1'
import Placeholder2 from './Placeholder2'
import Placeholder3 from './Placeholder3'
import Nv2 from './Nv2'




export default class News extends Component {
    static defaultProps = {
        country: "us",
        category: 'general',
        language: "en",
        city: "New York",
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        language: PropTypes.string,
        city: PropTypes.string,
    }

    constructor() {

        super();
        this.state = {
            loading: true,
            A: [],
            B: [],
            C: {},
            page: 1,
            currentDate: new Date(),
            TR: 0
        }
    }

    async componentDidMount() {
        let newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
        let weatherApiKey= process.env.REACT_APP_WEATHER_API_KEY;

        let Newsurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${newsApiKey}&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page}`;
        let Weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.city}&units=metric&appid=${weatherApiKey}`;

        let data = await fetch(Newsurl)
        let Wdata = await fetch(Weatherurl);

        let ParsedData = await data.json();
        let ParsedDataW = await Wdata.json();

        setTimeout(() => {
            this.setState({
                A: ParsedData.articles,
                B: ParsedDataW.main,
                C: ParsedDataW,
                TR: ParsedData.totalResults,
                loading: false
            });
        }, 2000);

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
            top:0,
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
        const WeatheUpdate = [];




        if (this.state.B && this.state.C && this.state.C.weather && this.state.C.weather.length > 0) {
            const weatherType = this.state.C.weather[0].main;
            WeatheUpdate.push(weatherType)
        }

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
        for (let i = 0; i < Math.ceil(((articleArray.length) * 3) / 5); i++) {
            const Element = articleArray[i];
            if (Element.url === "https://removed.com") {
                continue;
            } else {
                newsCards.push(
                    <div className='col md-3' key={Element.url}>
                        <NewsCard
                            key={Element.url}
                            title={Element.title ? Element.title.slice(0, 200) : " "}
                            description={Element.description ? Element.description.slice(0, 600) + "..." : " "}
                            ImgUrl={Element.urlToImage ? Element.urlToImage : "https://cdn1.vectorstock.com/i/1000x1000/76/00/news-icon-newspaper-symbol-flat-vector-6577600.jpg"}
                            url={Element.url}
                            date={Element.publishedAt.slice(5, 10) + "-" + Element.publishedAt.slice(0, 4)}
                        />
                    </div>
                )
            }
        }

        // Verticle Card
        for (let i = Math.ceil(((articleArray.length) * 3) / 5); i < articleArray.length; i++) {
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
            }
        }

        return (
            <div className='newssection'>
                <div className='sections' style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div className='row'>
                        <hr></hr>
                        <div className='col-md-9' style={{ float: "left", borderRight: "2px solid #ccc", paddingLeft: "-5px" }}>
                            {this.state.loading ? <Placeholder2 /> : newsCards.length === 0 ? <Nv2 /> : newsCards}
                        </div>
                        <div className='col-md-3'>
                            {this.state.loading && this.state.page === 1 ? <Placeholder3 /> : <Weather
                                temp={this.state.B.temp}
                                Feels_like={this.state.B.feels_like}
                                humidity={this.state.B.humidity}
                                cityName={this.state.C.name}
                                WT={WeatheUpdate[0]}
                            />}
                            {this.state.loading ? <Placeholders1 /> : newsCards2}
                        </div>
                    </div>
                </div>
                <br></br>

                <div className='container' style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" className="btn btn-outline-white btn-dark" disabled={this.state.page === 1} onClick={this.PrevBtn}>Previous</button>
                    <button type="button" className="btn btn-outline-white btn-dark" disabled={this.state.page === (Math.ceil(this.state.TR / 16)) || newsCards.length === 0} onClick={this.NextBtn}>Next page..</button>
                </div>
                <br></br>


            </div>
        );
    }
}