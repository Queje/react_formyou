import { useEffect, useState } from "react";
import "./ManageUsers.scss";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const ManageUsers = () => {
  const { data, error, isLoading, get, patch } = useFetch();
  const [reviewedUser, setReviewedUser] = useState("");

  const editUser = (id, approved) => {
    patch(`/admin/users/${id}`, { is_approved: approved });
    setReviewedUser(id);
  };

  useEffect(() => {
    get("/admin/users?is_reviewed=false");
  }, [reviewedUser]);

  return (
    <div className="ManageUsers">
      {error && <h4>{error}</h4>}
      {data && <p>Users pending for review : {data.length}</p>}
      {data && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th colSpan="2">Approve user?</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <AiFillCheckCircle
                    size={30}
                    style={{ color: "green" }}
                    onClick={() => editUser(user.id, true)}
                  />
                </td>
                <td>
                  <AiFillCloseCircle
                    size={30}
                    style={{ color: "red" }}
                    onClick={() => editUser(user.id, false)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ManageUsers;
