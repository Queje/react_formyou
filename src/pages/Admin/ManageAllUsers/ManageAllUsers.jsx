import React, { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";
import { Table } from "react-bootstrap";

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
            <h2>Users pending for review : {data.length}</h2>

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
                    </td>{" "}
                    console.log("handling new");
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
