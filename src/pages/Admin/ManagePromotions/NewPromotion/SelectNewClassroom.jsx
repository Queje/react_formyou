import { useEffect } from "react";
import useFetch from "hooks/useFetch";
import { Form } from "react-bootstrap";

const SelectNewClassroom = ({ getNewClassroom }) => {
  const { data, get } = useFetch();
  const handleChange = (event) => {
    getNewClassroom(event.target.value);
  };

  useEffect(() => {
    get(`/classrooms`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form.Control as="select" onChange={handleChange} value="choose">
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

export default SelectNewClassroom;
