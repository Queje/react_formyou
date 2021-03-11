import { useEffect, useState, useRef } from "react";
import useFetch from "hooks/useFetch";
import "./ManageCategories.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineCheckSquare,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

const CategoryLine = ({ category }) => {
  const { data, patch, get, destroy } = useFetch();
  const [editing, setEditing] = useState(false);
  const newTitle = useRef();
  const [title, setNewTitle] = useState(category.title);
  const [deleted, setDeleted] = useState();


  const handleClickEdit = () => {
    if (!editing) {
      setEditing(true);
    } else {
      patch(`/admin/categories/${category.id}`, {
        title: newTitle.current.value,
      });
      // dispatch(fetchEditPost(newText.current.value, post.id));
      setNewTitle(newTitle.current.value);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      destroy(`/admin/categories/${category.id}`);
      setDeleted(true);
    }
  };

  useEffect(() => {
    get(`/admin/categories/${category.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    data &&
    !deleted && (
      <tr key={data.category.id}>
        <td>{data.category.id}</td>
        <td>
          {(editing && (
            <input ref={newTitle} placeholder={title} defaultValue={title} />
          )) ||
            title}
        </td>
        <td>
          {data.courses.map((course) => (
            <Link to={`/courses/${course.id}`}>{course.title}, </Link>
          ))}
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
          {" "}
          <AiOutlineDelete
            className="ml-3"
            size={30}
            onClick={handleDelete}
            style={{ color: "red" }}
          />
        </td>
      </tr>
    )
  );
};

export default CategoryLine;
