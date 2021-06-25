import React from 'react'
import './hero.css'

export default function Card(props) {
    return (
        <>
        <div style={{marginTop:"2%"}} className="zoom col-md-4 col-10 mx-auto">
                            <div className="card" >
                                <img src={props.imgsrc} className="card-img-top" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{props.title}</h5>
                                  
                                </div>
                                </div>
                            </div>
        </>
    )
}
