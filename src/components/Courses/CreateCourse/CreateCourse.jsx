import React, { useState, useEffect } from 'react';
import './CreateCourse.scss';
import useFetch from "hooks/useFetch";
import CoursesCategories from '../CoursesCategories/CoursesCategories.jsx';

const CreateCourse = ( { handleNewCourse } ) => {

  const { data, get, post } = useFetch();
  const [teacher, setTeacher] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  
  const teachers = (data ? data.filter(user => user.role === 'teacher') : "");

  const saveCourse = (course) => {
    post(`/admin/courses`, course);
    handleNewCourse(course)
  }

  const getCategory = (id) => {
    setCategory(id)
  }

  const format = () => {
    const post = {
      "title": title,
    	"content": content,
			"teacher_id": teacher,
			"category_ids": category
    }
    saveCourse(post)
  }

  useEffect(() => {get("/admin/users");}, []);

  return (
    <div className="container" >
      <h3>Create your new course</h3>
      <div className="form">
        <label>
          Title:<br></br>
          <input className="title" type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="content">
          Content:<br></br>
          <textarea  type="text-area" placeholder="content" onChange={(e) => setContent(e.target.value)} />
        </label>
        <label>
          Categories:<br></br>
          <CoursesCategories className="category" getCategory={getCategory}  />
        </label>
        <label>
          Teacher:<br></br>
          <select
          className="teachers"
          value={teacher}
          name="role"
          onChange={(e) => setTeacher(e.target.value)}
        >
          {teachers && teachers.length > 0 &&
            teachers.map(teacher =>  
              <option key={teacher.id} value={teacher.id}>{teacher.first_name} {teacher.last_name}</option>
          )}
        </select>
        </label>
      </div>
      <button className="custom-button" type="button" onClick={format} >Post</button>
    </div>
  )
};

export default CreateCourse;
