import React, { useState, useEffect } from 'react';
import './CreateCourse.scss';
import useFetch from "hooks/useFetch";
import CoursesCategories from '../CoursesCategories/CoursesCategories.jsx';

const CreateCourse = ( { handleNewCourse, setCreate } ) => {

  const { data, get, post } = useFetch();
  const [teacher, setTeacher] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const saveCourse = (course) => {
    post(`/courses`, course);
    setCreate(false)
    handleNewCourse(course)
    console.log("saved course", course)
  }

  const getCategory = (category) => {
    setCategory(category)
  }

  
  const format = () => {
    const post = {
      "title": title,
    	"content": content,
			"teacher_id": teacher,
			"category": category
    }
    saveCourse(post)
  }
  
  const teachers = (data ? data.filter(user => user.role === 'teacher') : "");

  useEffect(() => {get("/admin/users");}, []);

  console.log("Users:", teachers)
  
  return (
    <div className="container" >
      <h3>Create your new course</h3>
      <div className="input">
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <textarea type="text-area" placeholder="content" onChange={(e) => setContent(e.target.value)} />
        <CoursesCategories getCategory={getCategory}  />
        <select
          value={teacher}
          name="role"
          onChange={(e) => setTeacher(e.target.value)}
        >
          {teachers && teachers.length > 0 &&
            teachers.map(teacher =>  
              <option key={teacher.id} value={teacher.id}>{teacher.first_name} {teacher.last_name}</option>
          )}
        </select>
      </div>
      <button type="button" onClick={format} >Post</button>
    </div>
  )
};

export default CreateCourse;
