import React from 'react'
import DetailsComponent from '../Components/DetailsComponent'
import '../../styles/bootstrap.css'


class DetailsContainer extends React.Component
{ 
    render() { 
        
        return (
            <div className="inContainer">
                <DetailsComponent id={this.props.id} title={this.props.title} description={this.props.description}/>
            </div>
        )
    }
}

export default DetailsContainer