import React, { useState } from "react";

const Student = ({ email, first_name, last_name, note }) => {
  const [assignNote, setAssignNote] = useState("");

  console.log(email);
  const handleChange = () => {
    return;
  };
  return (
    <li>
      a {first_name} {last_name}
      <input
        type="text"
        placeholder={"20"}
        onchange={handleChange}
        value={assignNote}
      />
      <button>note</button>
    </li>
  );
};

export default Student;
