import React, { useContext } from 'react'
import FeaturesData from '../../../data/FeaturesData'
import DetailsComponent from '../../Details/Components/DetailsComponent'
import Navbar from '../../Navbar/Containers/Navbar';
import '../../styles/bootstrap.css'
import { AppContext } from '../../../App';
import { Link } from 'react-router-dom';


function FeaturesContainer( )
{
    const { state } = useContext(AppContext)
    const features = FeaturesData.map(feature => <DetailsComponent id={feature.id} title={feature.title} description={feature.description} />)
    
    let content;

    if (state.userName)
    {
        content = <div><span className="mainContainer" style={{ marginTop: '20vh' }}>{features}</span></div>;
    }
    else { 
        content =<div className="mainContainer"><h1>Hii !! Please Log In</h1><button><Link to="/">Log In here </Link></button> </div>
    }
    
    return (
            <div >
                <Navbar />
                {content}
            </div>
        )
    
}

export default FeaturesContainer 
