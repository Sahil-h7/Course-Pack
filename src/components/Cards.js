import React from 'react'
import Card from './Card'
import { useState } from 'react';

const Cards = ({apiresult, category}) => {

  const [likedCourses, setLikedCourses] = useState([]);

    const objCourse = () => {

      if(category === "All") {
        let allCourses = [];
        Object.values(apiresult).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    }
    else { 
        return apiresult[category];      
    }
    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        objCourse().map((course) => {
            return (<Card key={course.id} course={course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}/>);
        })
      }
    </div>
  )
}

export default Cards
