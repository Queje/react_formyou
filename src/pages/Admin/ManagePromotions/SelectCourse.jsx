import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Form } from "react-bootstrap";

const SelectCourse = ({ previousCourse, getSelectedCourse, getNewCourse }) => {
  const { data, get } = useFetch();
  const [course, setCourse] = useState(
    previousCourse ? previousCourse.id : "Choose"
  );
  const [courseName, setCourseName] = useState(
    previousCourse ? previousCourse.title : "Choose"
  );
  const handleChange = (event) => {
    const courseNewTitle =
      event.target.options[event.target.selectedIndex].text;
    setCourse(event.target.value);
    setCourseName(courseNewTitle);
    getSelectedCourse(event.target.value, courseNewTitle);
  };

  useEffect(() => {
    get(`/courses`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form.Control
        as="select"
        value={course}
        onChange={handleChange}
        name={courseName}
        id={courseName}
      >
        {data &&
          data.map((courseItem) => (
            <option
              key={courseItem.id}
              value={courseItem.id}
              name={courseItem.title}
            >
              {courseItem.title}
            </option>
          ))}
      </Form.Control>
    </>
  );
};

export default SelectCourse;
