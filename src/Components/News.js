import React, { Component } from 'react'
import NewsCard from './NewsCrad'
import PropTypes from 'prop-types'
import NewscardType2 from './NewscardType2'

export default class News extends Component {


    static defaultProps = {
        country: "us",
        category: 'general',
        language:"en"
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        language: PropTypes.string
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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            TR: ParsedData.totalResults
        })
    }


    NextBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page + 1
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    PrevBtn = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=320aaeab33d048eeb5b2d62daeee030f&pagesize=16&language=${this.props.language}&category=${this.props.category}&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            A: ParsedData.articles,
            page: this.state.page - 1
        })
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }


    render() {
        const articleArray=[];
        const newsCards = [];
        const newsCards2 = [];
        let n=articleArray.length;

        for(let i = 0; i <this.state.A.length; i++){
            const elem = this.state.A[i];
            if (elem.url === "https://removed.com") {
                console.log("absent");
                continue;
            }
            else{
                articleArray.push(elem);
            }         
        }        

        // Horizontal Card
        for (let i = 0; i <((this.state.A.length)*3)/4; i++) {
            const Element = this.state.A[i];
            if (Element.url === "https://removed.com") {
            }else{
                newsCards.push(
                    <div className='col md-3' key={Element.url}>
                        <NewsCard
                            key={Element.url}
                            title={Element.title ? Element.title.slice(0, 200) : " "}
                            description={Element.description ? Element.description.slice(0, 200) + "..." : " "}
                            ImgUrl={Element.urlToImage ? Element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                            url={Element.url}
                            date={Element.publishedAt.slice(5, 10) + "-" + Element.publishedAt.slice(0, 4)}
                        />
                    </div>
                );
            }
        }  
        
        // Verticle Card
        for (let i =((this.state.A.length)*3)/4; i<this.state.A.length; i++) {
            const element = this.state.A[i];
            if (element.url === "https://removed.com") {
                continue;
            }else{
                newsCards2.push(
                    <div className='col md-3' key={element.url}>
                        <NewscardType2
                            key={element.url}
                            title={element.title ? element.title.slice(0, 150) : " "}
                            description={element.description ? element.description.slice(0, 250) + "..." : " "}
                            ImgUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                            url={element.url}
                            date={element.publishedAt.slice(5, 10) + "-" + element.publishedAt.slice(0, 4)}
                        />
                    </div>
                );
            }
        }  

        console.log(articleArray.length);
        console.log(this.state.A.length);
        
        
        return (
            <div className='container'>
                <hr></hr>
                <div style={{ width: "100%" }}>
                    <div style={{ float: "left", width: "75%",  borderRight: "2px solid #ccc" }}>
                        {newsCards}
                    </div>
                </div>
                    <div style={{ float: "right" }}>
                       {newsCards2}
                    </div>
    
                <div className='container' style={{ display: "flex", justifyContent: "space-between" }}>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === 1} onClick={this.PrevBtn}>Previous</button>
                    <button type="button" className="btn btn-outline-dark btn-lg" disabled={this.state.page === (Math.ceil(this.state.TR / 16))} onClick={this.NextBtn}>Next page..</button>
                </div>
            </div>
        );
    }}