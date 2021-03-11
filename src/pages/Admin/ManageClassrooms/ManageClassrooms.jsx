import useFetch from 'hooks/useFetch';
import React, { useEffect, useState } from 'react';
import Loading from "components/Loading";
import { Table } from "react-bootstrap";
import "./ManageClassrooms.scss";

const ManageClassrooms = () => {
 
  const { data, error, isLoading, post, get, destroy } = useFetch();
  const [newClassroom, setNewClassroom]= useState("");
  const [deleteClassroom, setDeleteClassroom]= useState(0);

const createClassroom = (userData,e) => {
  e.preventDefault();
  post(`/classrooms`, {"classroom":{"title": userData}});
  setNewClassroom(newClassroom);
};

const classroomDelete = (id, approved) => {
  destroy(`/classrooms/${id}`, { is_approved: approved });
  setDeleteClassroom(deleteClassroom + 1);
};

useEffect (() => {
  get('/classrooms');
}, [deleteClassroom]);

useEffect (() => {
  get('/classrooms');
}, [newClassroom]);

  return (
    <div className="ManageClassrooms">
      <form onSubmit={(e)=>createClassroom(newClassroom, e)}>
        <input placeholder="Classroom"onChange={(e) =>setNewClassroom(e.target.value)}></input>
        <button className="btn btn-primary mb-3" type="submit">Add classroom</button>
      </form>
    <div>
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (data && (
        <div>
          <h1>Number of classroom: {data.length}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title of classroom</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((classroom) =>(
                <tr>
                  <th>{classroom.id}</th>
                  <th>{classroom.title}</th>
                  <th>
                    <button 
                      onClick={() => classroomDelete(classroom.id, true)}
                      className="btn btn-danger"> Delete
                    </button>
                  </th>
                </tr>
                ))}
              </tbody>
            </Table>
            <div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClassrooms;
