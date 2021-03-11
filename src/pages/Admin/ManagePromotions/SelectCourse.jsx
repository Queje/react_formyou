import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Form, Button } from "react-bootstrap";

const SelectCourse = ({ previousCourse, getSelectedCourse }) => {
  const { data, get } = useFetch();

  useEffect(() => {
    get(`/courses`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form.Control
        as="select"
        value={previousCourse}
        onChange={(event) => getSelectedCourse(event.target.value)}
      >
        {data &&
          data.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
      </Form.Control>
    </>
  );
};

export default SelectCourse;
