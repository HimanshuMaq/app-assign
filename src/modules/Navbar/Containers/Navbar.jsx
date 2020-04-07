import React from 'react'
import NavbarLinks from '../Components/NavbarLinks'
import '../../styles/bootstrap.css'

function Navbar() { 
    return (
        <div class="navbar navbar-default">
        <NavbarLinks title="Home" link="/Home" />
        <NavbarLinks title="Courses" link="/Courses" />
        <NavbarLinks title="Features" link="/Features" />
        </div>
    )
}

export default Navbar