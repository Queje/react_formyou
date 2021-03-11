import { useEffect, useState } from "react";
import "./ManageCategories.scss";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import CategoryLine from "./CategoryLine";
import Loading from "components/Loading";
import NewCategory from "./NewCategory";

const ManageCategories = () => {
  const { data, error, isLoading, get } = useFetch();
  const [newCategory, setNewCategory] = useState("");

  const handleNewCategory = (categoryTitle) => {
    setNewCategory(categoryTitle);
  };

  useEffect(() => {
    get("/admin/categories");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCategory]);

  return (
    <div className="ManageCategories">
      {error && <h4>{error}</h4>}
      <NewCategory handleNewCategory={handleNewCategory} />
      {(isLoading && <Loading />) ||
        (data && (
          <>
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
