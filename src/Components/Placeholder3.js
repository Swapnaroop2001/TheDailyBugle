import React, { Component } from 'react'

export default class Placeholder3 extends Component {
  render() {
    return (
      <div>
        <div className="card placeholder-glow" style={{borderColor:"white", width: "100%",Height:"100%",marginBottom:"15px" ,boxShadow:"0 2px 10px rgba(0,0,0,0.1)", borderColor:"white"}}>
                    <div className="card-body" style={{textAlign:"center"}}>
                    <span class="placeholder col-8" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"25px"}}></span>
                    <span class="placeholder col-9" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"45px" , marginTop:"10px"}}></span>
                    <span class="placeholder col-4" style={{color:"rgb(227 229 232)",marginLeft:"05px"}}></span>
                    <span class="placeholder col-10" style={{color:"rgb(227 229 232)",marginLeft:"05px", marginTop:"10px", height:"180px"}}></span>
                    <span class="placeholder col-4" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"35px", marginTop:"10px"}}></span>
                    <div className='row' style={{marginTop:"15px"}}>
                        <div className='col-md-6'>
                        <span class="placeholder col-8" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"30px", marginTop:"10px"}}></span>
                        <span class="placeholder col-8" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"5px", marginTop:"10px"}}></span>
                        </div>
                        <div className='col-md-6'>
                        <span class="placeholder col-8" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"30px", marginTop:"10px"}}></span>
                        <span class="placeholder col-8" style={{color:"rgb(227 229 232)",marginLeft:"05px", height:"5px", marginTop:"10px"}}></span>
                        </div>
                    </div>

                    </div>
                </div>
      </div>
    )
  }
}
