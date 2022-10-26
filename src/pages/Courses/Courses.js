import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Button from 'react-bootstrap/Button';
import './Courses.css';

const Courses = () => {
    const [courses,setCourses] =useState([]);
    const [coursecard,setCourseCard] =useState([]);
    //console.log('hre is',courses)

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])


    useEffect(()=>{
        fetch('http://localhost:5000/coursecard')
        .then(res=>res.json())
        .then(data=> setCourseCard(data))
    },[])



    return (
        <div>
            <h4 className='text-center text-primary '> ALL COURSES</h4>
            
            <Container>
                <div className='d-flex gap-3'>
                    <Col className=''> <h4 className='text-warning'>Courses List</h4>
                  
                        {
                            courses.map(course=><p key={course.id}
                            course={course}><Link to={`/course/${course.id}`}> <Button variant="primary" className='btn-warn'>{course.title}</Button> </Link> </p>)
                        }
                    
                    </Col>

                    <Row className='m-4'> 
                    {
                            coursecard.map(course=><CourseCard key={course.course_id}
                            course={course}> 
                                
                                 </CourseCard>)
                        }

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Courses;