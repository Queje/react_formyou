import React from 'react';
import useFetch from 'hooks/useFetch';
import { useEffect, useState } from 'react';

const EditCourse = ( { course, handleNewCourse } ) => {
  const { title, content, teacher_id  } = course
  const { data, get, patch } = useFetch();
  const [newTeacher, setNewTeacher] = useState("");
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const updateCourse = (updatedCourse) => {
    patch(`/courses/${course.id}`, updatedCourse);
    handleNewCourse(updatedCourse)
  };


  const teachers = (data ? data.filter(user => user.role === 'teacher') : "");

  const teacher = () => {
    const previousTeacher = (teachers && teachers.filter(t => t.id === teacher_id));
    return previousTeacher[0]
  };

  const format = () => {
    const post = {
      "title": newTitle,
    	"content": newContent,
			"teacher_id": newTeacher
    }
    updateCourse(post)
  }

  useEffect(() => {get("/admin/users");}, []);

  return ( course &&
    <div className="container" >
      <h3>Editing Course</h3>
      <div className="input">
        <input type="text"  placeholder={title} onChange={(e) => setNewTitle(e.target.value)} />
        <textarea type="text-area"  placeholder={content} onChange={(e) => setNewContent(e.target.value)} />
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
      </div>
      <button type="button" onClick={format}  >Post</button>
    </div>
  )
};

export default EditCourse;
