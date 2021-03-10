import { useEffect } from "react";
import useFetch from "Hooks/useFetch";
import "./ManageCategories.scss";
import { Link } from "react-router-dom";

const CategoryLine = ({ category }) => {
  const { data, error, isLoading, get } = useFetch();

  useEffect(() => {
    get(`/admin/categories/${category.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    data && (
      <tr key={data.category.id}>
        <td>{data.category.id}</td>
        <td>{data.category.title}</td>
        <td>
          {data.courses.map((course) => (
            <Link to={`/courses/${course.id}`}>{course.title}, </Link>
          ))}
        </td>
        <td>EDIT</td>
        <td>DELETE</td>
      </tr>
    )
  );
};

export default CategoryLine;
