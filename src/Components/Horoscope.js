import React, { Component } from 'react'

export default class Horoscope extends Component {

    render() {
        const url = 'https://horoscope-astrology.p.rapidapi.com/sign?s=libra';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3cd1a1f8d4msh47b350c634c1141p1ac003jsn2e2e73a3395e',
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
            }
        };

        try {
            const response = fetch(url, options);
            const result =  response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        return (
            <div>Horoscope</div>
        )
    }
}
