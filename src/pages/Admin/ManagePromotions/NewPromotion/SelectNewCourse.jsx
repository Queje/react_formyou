import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Form } from "react-bootstrap";

const SelectNewCourse = ({ getNewCourse }) => {
  const { data, get } = useFetch();
  const [course, setCourse] = useState();

  const handleChange = (event) => {
    setCourse(event.target.value);
    getNewCourse(event.target.value);
  };

  useEffect(() => {
    get(`/courses`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form.Control as="select" value={course} onChange={handleChange}>
        {data &&
          data.map((courseItem) => (
            <option key={courseItem.id} value={courseItem.id}>
              {courseItem.title}
            </option>
          ))}
      </Form.Control>
    </>
  );
};

export default SelectNewCourse;
