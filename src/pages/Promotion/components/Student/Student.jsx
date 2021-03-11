import useFetch from "hooks/useFetch";
import React, { useState } from "react";

const getCurrentDate = (separator = "-") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
};
const Student = ({ subscription, startdate, student }) => {
  const { patch } = useFetch();
  const [assignNote, setAssignNote] = useState("");
  const { id, first_name, last_name } = student || {};
  const { note } = subscription;

  const handleChange = (e) => {
    setAssignNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(`/users/${id}/subscriptions/${subscription.id}`, {
      note: assignNote,
    });
  };

  return (
    <li>
      {(startdate < getCurrentDate() && (
        <form onSubmit={handleSubmit}>
          {first_name} {last_name}{" "}
          <input
            type="text"
            pattern="20|(^[1]?[0-9])"
            placeholder={note}
            onChange={handleChange}
            value={assignNote}
          />
          <button type="submit">Noter l'élève</button>
        </form>
      )) || (
        <>
          {first_name} {last_name}
        </>
      )}
    </li>
  );
};

export default Student;
