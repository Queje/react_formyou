import useFetch from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import Loading from "components/Loading";
import { Table } from "react-bootstrap";
import "./ManageClassrooms.scss";
import NewClassroom from "./NewClassroom";
import ClassroomLine from "./ClassroomLine";

const ManageClassrooms = () => {
  const { data, error, isLoading, get } = useFetch();
  const [newClassroom, setNewClassroom] = useState("");

  const handleNewClassroom = (classroomTitle) => {
    setNewClassroom(classroomTitle);
  };

  useEffect(() => {
    get("/admin/classrooms");
  }, [newClassroom]);

  return (
    <div className="ManageClassrooms">
      <div>
        {error && <h4>{error}</h4>}
        <NewClassroom handleNewClassroom={handleNewClassroom} />
        {(isLoading && <Loading />) ||
          (data && (
            <div>
              <h1>Number of classroom: {data.length}</h1>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title of classroom</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((classroom) => (
                    <ClassroomLine classroom={classroom} />
                  ))}
                </tbody>
              </Table>
              <div></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManageClassrooms;
