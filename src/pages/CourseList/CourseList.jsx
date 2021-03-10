import React, { useEffect, useState } from "react";
import { getCourses } from "services/CoursesService";
import CourseCard from "components/CourseCard/CourseCard";

const CourseList = () => {
  const [course, setCourse] = useState();

  const fetchCourse = async () => {
    const courses = await getCourses();
    setCourse(courses);
  };

  useEffect(() => fetchCourse(), []);

  return (
    <div>
      <h2>Nos Formations</h2>
      <div>
        {course && (
          <div className="row">
            {course.map((e) => (
              <CourseCard key={e.id} course={e} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
