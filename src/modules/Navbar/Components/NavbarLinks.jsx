import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLinks(props) { 
    const title = props.title
    const link = props.link 
    return (
        <div className="Navbarlink">
            <Link to={link}><h4 style={{color:'white',}}>{title}</h4></Link>
        </div>
    )
}

export default NavbarLinks