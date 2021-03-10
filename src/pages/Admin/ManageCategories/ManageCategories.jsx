import { useEffect } from "react";
import "./ManageCategories.scss";
import useFetch from "Hooks/useFetch";
import { Table } from "react-bootstrap";
import CategoryLine from "./CategoryLine";
import Loading from "components/Loading";
const ManageCategories = () => {
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get("/admin/categories");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ManageCategories">
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (data && (
          <>
            <h2>Users pending for review : {data.length}</h2>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Related courses</th>
                  <th colSpan="2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((category) => (
                  <CategoryLine category={category} />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManageCategories;
