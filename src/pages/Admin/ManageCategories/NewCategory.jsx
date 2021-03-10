import { useState, useRef } from "react";
import useFetch from "Hooks/useFetch";
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
      <button type="button" onClick={handleClick}>
        NEW CATEGORY
      </button>
      {creating && (
        <>
          <input ref={newTitle} />
          <AiOutlineCheckSquare onClick={handleClick} size={30} />
        </>
      )}
    </div>
  );
};

export default NewCategory;
