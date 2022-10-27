import React from 'react';
//import { Button } from 'react-bootstrap';
//import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";



const ref= React.createRef();


const PremiumCard = ({course}) => {


    return (
        <div className="border border-primary">
            <Pdf targetRef={ref} filename="course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf} class="btn btn-primary btn-lg float-center" >Download Course </button>}
            </Pdf>
            <div ref={ref} >   
                <img className='courselogo ' src={course.image_url}  alt="logo"/>
                <h1 className='text-black text-center'>Course Title :  {course.title}</h1>

                <p className='text-black'>{course.details1}</p>
                <p className='text-black'>{course.details2}</p>
                <p className='text-black'>{course.details3}</p>
             </div>
         </div>
    );
};

export default PremiumCard;