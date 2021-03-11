import { useState, useRef } from "react";
import useFetch from "hooks/useFetch";
import { AiOutlineCheckSquare } from "react-icons/ai";

const NewCategory = ({ handleNewCategory }) => {
  const newTitle = useRef();
  const [creating, setCreating] = useState(false);
  const { post } = useFetch();

  const handleClick = () => {
    if (!creating) {
      setCreating(true);
    } else {
      post(`/admin/categories`, {
        title: newTitle.current.value,
      });
      setCreating(false);
      handleNewCategory(newTitle.current.value);
    }
  };

  return (
    <div className="NewCategory">
      <button
        type="button"
        className="btn btn-primary btn-lg m-3 "
        onClick={handleClick}
      >
        CREATE A NEW CATEGORY
      </button>
      {creating && (
        <>
          <input ref={newTitle} />
          <AiOutlineCheckSquare
            onClick={handleClick}
            size={40}
            style={{ color: "green" }}
          />
        </>
      )}
    </div>
  );
};

export default NewCategory;
