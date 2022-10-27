import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import PremiumAccess from '../PremiumAccess/PremiumAccess';
import './Course.css';



const Course = () => {
    const course = useLoaderData();
   
    return (
        <div className="bg-1">
     
                   <div className="container text-center" >    
                        <img className='courselogo' src={course.image_url}  alt="logo"/>
                        <h1>Course Title :  {course.title}</h1>

                        <img src={course.thumbnail_url} className="thumbnail" alt="Course"   />
                        
                            

                            
                        <p>{course.details1}</p>
                        <p>{course.details2}</p>
                        <p>{course.details3}</p>
                 

                     </div>
                    
                    <Link to='/premiumaccess'><Button> PremiumAccess</Button></Link>




        </div>
    );
};



export default Course;