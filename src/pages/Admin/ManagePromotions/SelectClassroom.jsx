import { useEffect, useState } from "react";
import useFetch from "hooks/useFetch";
import { Form } from "react-bootstrap";

const SelectClassroom = ({ previousClassroom, getSelectedClassroom }) => {
  const { data, get } = useFetch();
  const [classroom, setClassroom] = useState(previousClassroom);

  const handleChange = (event) => {
    setClassroom(event.target.value);
    getSelectedClassroom(event.target.value);
  };

  useEffect(() => {
    get(`/classrooms`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classroom]);

  return (
    <>
      <Form.Control
        as="select"
        value={previousClassroom}
        onChange={handleChange}
      >
        {data &&
          data.map((classroom) => (
            <option key={classroom.id} value={classroom.id}>
              {classroom.id}
            </option>
          ))}
      </Form.Control>
    </>
  );
};

export default SelectClassroom;
