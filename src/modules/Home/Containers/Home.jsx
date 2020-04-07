import React, { useContext } from 'react'
import FeaturesData from '../../../data/FeaturesData'
import CoursesData from '../../../data/CourseData'
import DeatilsContainer from '../../Details/Containers/DeatilsContainer'
import { cloneDeep } from 'lodash'; 
import Navbar from '../../Navbar/Containers/Navbar';
import '../../styles/bootstrap.css'
import { AppContext } from '../../../App';
import { Link } from 'react-router-dom';

function Home()
{
   let features = cloneDeep(FeaturesData)
   let courses = cloneDeep(CoursesData)

   const {state} = useContext(AppContext);
  
   features = features.filter(feature => feature.id < 4)
   courses = courses.filter(course => course.id < 4)

  const showFeatures = features.map(feature => <DeatilsContainer id={feature.id} title={feature.title} description={feature.description} />)
  const showCourses = courses.map(course => <DeatilsContainer id={course.id} title={course.title} description={course.description} />)

  let content;

  if (state.userName)
  {
    content = <div><span className="mainContainer" style={{ marginTop: '20vh' }}>{showFeatures}</span>
      <span className="mainContainer">{showCourses} </span></div>;
  }

  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <h1>Hii !! {state.userName ? state.userName : "Please Log In"}</h1>
        {!state.userName && (<button><Link to='/'>Login Here</Link></button>)}   
      </div >{content}
    </div>
  )
}


export default Home
