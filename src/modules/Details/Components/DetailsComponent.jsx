import React from 'react'
import '../../styles/bootstrap.css'

function DetailsComponent(props) {  
    return (
        <div className="inContainer">   
            <h2>
                {props.title}
            </h2>
            <text>{props.description}</text>
        </div>
    )
}

export default DetailsComponent

