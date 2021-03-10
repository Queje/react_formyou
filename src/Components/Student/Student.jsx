import useFetch from "Hooks/useFetch";
import React, { useEffect, useState } from "react";

const getCurrentDate = (separator = "") => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
};
const Student = ({ subscription, startdate }) => {
  const { data, error, isLoading, get, patch } = useFetch();
  const [assignNote, setAssignNote] = useState("");
  const { id, email, first_name, last_name } = data || {};
  const { note } = subscription;

  useEffect(() => {
    get(`/users/${subscription.student_id}`);
  }, []);

  const handleChange = (e) => {
    setAssignNote(e.target.value);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    patch(`/users/${id}/subscriptions/${subscription.id}`, {
      note: assignNote,
    });
  };

  return (
    <>
      {data && (
        <li>
          {(startdate < getCurrentDate() && (
            <form onSubmit={handleSubmit}>
              {first_name} {last_name}{" "}
              <input
                type="text"
                pattern="[0-9]*"
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
      )}
    </>
  );
};

export default Student;
