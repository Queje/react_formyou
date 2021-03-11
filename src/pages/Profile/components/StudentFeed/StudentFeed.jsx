import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import Loading from "components/Loading";
import { Table } from "react-bootstrap";
import CourseLine from "./CourseLine";

const StudentFeed = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { error, isLoading, get, data: courses } = useFetch();

  useEffect(() => {
    get(`/users/${currentUser.id}/subscriptions`);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(courses);
  return (
    <div className="StudentFeed">
      {error && <h4>{error}</h4>}
      {(isLoading && <Loading />) ||
        (courses && (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Classroom</th>
                  <th>Notes</th>
                  <th colSpan="2">Unsubscribe</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <CourseLine course={course} />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default StudentFeed;
