import React, { useContext } from 'react'
import CoursesData from '../../../data/CourseData'
import DetailsComponent from '../../Details/Components/DetailsComponent'
import Navbar from '../../Navbar/Containers/Navbar';
import '../../styles/bootstrap.css'
import { AppContext } from '../../../App';
import { Link } from 'react-router-dom';


function CoursesContainer (){ 
 
    const courses = CoursesData.map(course => <DetailsComponent id={course.id} title={course.title} description={course.description} />)
    const { state } = useContext(AppContext)
    let content;

    if (state.userName)
    {
        content = <div><span className="mainContainer" style={{ marginTop: '20vh' }}>{courses}</span></div>;
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

export default CoursesContainer