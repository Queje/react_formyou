import { useEffect, useState } from "react";
import "./ManagePromotions.scss";
import useFetch from "hooks/useFetch";
import { Table } from "react-bootstrap";
import PromotionLine from "./PromotionLine";
import Loading from "components/Loading";
import NewPromotion from "./NewPromotion/NewPromotion";

const ManagePromotions = () => {
  const { data, error, isLoading, get } = useFetch();
  const [newPromotion, setNewPromotion] = useState("");

  const handleNewPromotion = (courseTitle) => {
    setNewPromotion(courseTitle);
  };

  useEffect(() => {
    get("/admin/promotions");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newPromotion]);

  return (
    <div className="ManagePromotions">
      {error && <h4>{error}</h4>}
      <NewPromotion handleNewPromotion={handleNewPromotion} />

      {(isLoading && <Loading />) ||
        (data && (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Start date</th>
                  <th>Classroom n°</th>
                  <th>Teacher's name</th>
                  <th>Remaining seats</th>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((promotion) => (
                  <PromotionLine promotion={promotion} />
                ))}
              </tbody>
            </Table>
          </>
        ))}
    </div>
  );
};

export default ManagePromotions;
