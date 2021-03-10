import useFetch from "Hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Session = ({ match }) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [students, setStudents] = useState([]);
  console.log(Number(match.params.id));

  const fetchPromotions = async () => {
    get(`/promotions/1?student=true`);
    get(`/promotions/1?subscription=true`);
  };
  console.log(data);
  useEffect(() => {
    fetchPromotions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("data :", data);
    if (data?.promotion_id) {
    }
    if (data?.[0].email) {
      console.log("fewfe", data);
      setStudents(data);
    }
  }, [data]);

  return (
    <div>
      Session
      <ul>
        {students.map(({ id, email, first_name, last_name }) => {
          return (
            <li key={id}>
              {first_name} {last_name} <input type="text" />
              <button>note</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Session;
