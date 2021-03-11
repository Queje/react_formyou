import React, { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";
import { Table } from "react-bootstrap";
import './ManageAllUsers.scss'

const ManageAllUsers = () => {
  const { data, error, isLoading, get, destroy } = useFetch();
  const [deleteUser, setDeleteUser] = useState(0);

  const userDelete = (id, approved) => {
    destroy(`/admin/users/${id}`, { is_approved: approved });
    setDeleteUser(deleteUser + 1);
  };

  useEffect(() => {
    get("/admin/users");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUser]);

  return (
    <div className="ManageUsers">
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (data && (
          <>
            <div className="text-center mb-3">
              <h3>Manage All Users</h3>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Supprimer</th>
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
                      {(user.role === "admin" && <p>Admin </p>) || (
                        <button
                          onClick={() => userDelete(user.id, true)}
                          className="btn btn-danger"
                        >
                          Supprimer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};
export default ManageAllUsers;
