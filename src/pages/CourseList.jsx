import React, { useEffect, useState } from 'react';
import { getCourses } from 'services/coursesService';
import CourseCard from '../components/courseCard'

const CourseList = () =>{
const [course, setCourse] = useState ()

const fetchCourse = async () => {
  const courses = await getCourses()
  setCourse(courses)
}

useEffect(() => fetchCourse(), [])

  return (
    <div>
      <h2>Nos Formations</h2>
      <div>
        {course && (
          <div className="row">
              {course.map((e) => (
                <CourseCard course={e} />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseList