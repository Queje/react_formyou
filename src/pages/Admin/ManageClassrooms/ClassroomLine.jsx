import useFetch from 'hooks/useFetch';
import React, { useEffect, useState, useRef } from 'react';
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineCheckSquare
} from "react-icons/ai";

const ClassroomLine = ({ classroom }) => {
  const { data, patch, get, destroy } = useFetch();
  const [ deleted, setDeleted ]= useState();
  const newTitle = useRef();
  const [editing, setEditing] = useState();
  const [title, setNewTitle]= useState(classroom.title);
console.log(newTitle)
  const handleClickEdit = () => {
    if(!editing){
    setEditing(true);
    }else {
      patch(`/classrooms/${classroom.id}`, {
        title: newTitle.current.value,
        });
      setNewTitle(newTitle.current.value);

      setEditing(false)
  }
}


  const handleDelete = () => {
    if (window.confirm("Are You Sure ?")){
      destroy(`/classrooms/${classroom.id}`);
    }
    setDeleted(true)
  };

  useEffect(()=>{
    get(`/classrooms/${classroom.id}`)
  }, [])


  return (
    data &&
    !deleted && (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>
          {(editing && (
            <input ref={newTitle} placeholder={title} defaultValue={title} />
          )) ||
            title}
        </td>
      <td>
          {(!editing && (
            <span className="ml-3">
              <AiOutlineEdit
                size={30}
                onClick={handleClickEdit}
                style={{ color: "orange" }}
              />
            </span>
          )) || (
            <span className="ml-3">
              <AiOutlineCheckSquare onClick={handleClickEdit} size={30} />
            </span>
          )}
        </td>
      <td>
        <AiOutlineDelete
            className="ml-3"
            size={30}
            onClick={handleDelete}
            style={{ color: "red" }}
          />
        </td>
    </tr>

  ));
}

export default ClassroomLine