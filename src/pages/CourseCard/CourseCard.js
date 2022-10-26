import React from 'react';
import  './CourseCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    //console.log(course.course_id)

    return (
     
    <Card style={{ width: '15rem' }}>
        <Card.Body>
      <Card.Img variant="top" src={course.image_url} />
      
        <Card.Title>{course.title} {course.id}</Card.Title>

        <Link to={`/course/${course.course_id}`}> <Button variant="warning">Course Details</Button> </Link>
  
      </Card.Body>

        </Card>

    



    );
};

export default CourseCard;