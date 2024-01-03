import React, { Component } from 'react'

export default class Placeholders1 extends Component {
    render() {
        return (
            <div>
                <div class="card" aria-hidden="true" style={{borderColor:"white"}}>
                    <div style={{height:"200px", backgroundColor:"#d4d4d4"}}>
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
            </div>
        )
    }
}
