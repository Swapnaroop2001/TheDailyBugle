import React, { Component } from 'react'
import NewsCard from './NewsCrad'

export default class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
            A: this.articles
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b79cc641fca24f60b82db250210a261d"
        let data = await fetch(url);
        let ParsedData = await data.json();
        console.log(ParsedData);
        this.setState({
            A: ParsedData.articles
        })


    }


    render() {
        return (
            <div className='container'>
                <h1 style={{ textAlign: "center" }}>Top Headlines</h1>
                <div className='row'>
                    {this.state.A.map((Element) => {
                        if (Element.url == "https://removed.com") {
                            return null;
                        } else {
                            return <div className='col md-3' key={Element.url}>
                                <NewsCard title={Element.title ? Element.title.slice(0, 45) : " "}
                                    description={Element.description ? Element.description.slice(0, 95) + "..." : " "}
                                    ImgUrl={Element.urlToImage? Element.urlToImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9oUzyyrkuzmPkDFcUqTv3lPKHQwxmLiAug&usqp=CAU"}
                                    url={Element.url}
                                    date={Element.publishedAt.slice(5, 10) + "-" + Element.publishedAt.slice(0, 4)}
                                />
                            </div>
                        }
                    })}
                </div>
            </div>
        )
    }
}
