import React from 'react';
import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';
import CoursesCategories from '../CoursesCategories/CoursesCategories';

const EditCourse = ( { course, handleNewCourse } ) => {

  const { title, content, teacher_id, category  } = course

  const { data, get, patch } = useFetch();
  const [newTeacher, setNewTeacher] = useState("");
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newCategory, setCategory] = useState(category);

  const updateCourse = (updatedCourse) => {
    patch(`/admin/courses/${course.id}`, updatedCourse);
    handleNewCourse(updatedCourse)
  };

  const teachers = (data ? data.filter(user => user.role === 'teacher') : "");

  const teacher = () => {
    const previousTeacher = (teachers && teachers.filter(t => t.id === teacher_id));
    return previousTeacher[0]
  };

  const getCategory = (id) => {
    setCategory(id)
  }

  const format = () => {
    const post = {
      "title": newTitle,
    	"content": newContent,
			"teacher_id": newTeacher,
      "category_ids": newCategory
    }
    updateCourse(post)
  }

  useEffect(() => {get("/admin/users");}, []);

  return ( course &&
    <div className="container" >
      <h3>Editing Course</h3>
      <div className="form">
        <label>
          Title:<br></br>
          <input type="text"  placeholder={title} onChange={(e) => setNewTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea type="text-area"  placeholder={content} onChange={(e) => setNewContent(e.target.value)} />
        </label>
        <label>
          Categories:
          <CoursesCategories getCategory={getCategory}  />
        </label>
        <label>
          Teacher:
          <select
            value={title}
            placeholder={`${teacher.first_name} ${teacher.last_name}`}
            name="role"
            onChange={(e) => setNewTeacher(e.target.value)}
          >
            {teachers && teachers.length > 0 && 
              teachers.map(teacher =>  
                <option key={teacher.id} value={teacher.id}>{teacher.first_name} {teacher.last_name}</option>
            )}
          </select>
        </label>
      </div>
      <button className="custom-button" type="button" onClick={format} >Edit</button>
    </div>
  )
};

export default EditCourse;
