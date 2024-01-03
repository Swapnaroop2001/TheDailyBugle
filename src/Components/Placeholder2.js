import React, { Component } from 'react'

export default class Placeholder2 extends Component {
  render() {
    return (
        <div className='cards'style={{marginBottom:"15px",paddingBottom:"15px",borderBottom: "2px solid #ccc"}}>
        <div className="card" style={{maxwidth: "540px", height:"100%", borderColor:"white", marginRight:"6px"}}>
            <div className="row ">
            <div className="col-md-5" >
                    <div className="card-body skeleton" style={{paddingLeft:"0px",paddingTop:"2px"}}>
                    
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-11"></span>


                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-4"></span>

                            
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-4"></span>
                    </div>
            </div>
                <div className="col-md-7" style={{ padding:"0px 0px", marginLeft:"-10px", boxShadow:"0 2px 10px rgba(0,0,0,0.2)"}} >
                <div className="card-img " src="" style={{ width: "100%", height: "320px",borderRadius:"0px", objectFit: "cover" }}></div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
