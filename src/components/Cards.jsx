
import { useState } from "react";
import Card from "./Card.jsx";

function Cards({ courses,category,likedCourses ,setLikedCourses,showLikedOnly}) {
 
  let allCourses = [];
  // const [likedCourses,setLikedCourses] = useState([]);

  function getCourses() {


        if (showLikedOnly) {
        // Flatten all courses, then filter by liked
        Object.values(courses).forEach(courseCategory =>
        courseCategory.forEach(course => {
        if (likedCourses.includes(course.id)) {
          allCourses.push(course);
        }
        })
        );
        return allCourses;
        }


     if(category ==="All"){
       Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
     }

    else{
        return courses[category];
     }
   
  }

  const courseList = getCourses();


      if (courseList.length === 0) {
       return <p className="text-white text-2xl bg-blue-600 mt-[150px] font-bold ">No liked courses found.</p>;
      }

  return (
    




    <div className="flex flex-wrap justify-center gap-4 mb-4 ">
      {courseList.map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} 
        setLikedCourses={setLikedCourses} h1={50}/>
      ))}
    </div>
  );
}

export default Cards;
