import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumCard from '../PremiumCard/PremiumCard';
//import Pdf from "react-to-pdf";

//const ref= React.createRef();
const PremiumAccess = () => {
    const courses = useLoaderData();
    console.log('p course', courses)
    return (
        
            <div className="">

            {
                courses.map(course => <PremiumCard key={course.course_id}
                    course={course}> </PremiumCard>)
            }
            
            </div>
       
       
    );
};

export default PremiumAccess;