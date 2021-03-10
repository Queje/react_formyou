import { useState } from "react";
import "./PromotionsCalendar.scss";
import "../../../node_modules/react-big-calendar/lib/sass/styles.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";

const PromotionsCalendar = ({ promotions }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const localizer = momentLocalizer(moment);
  const [show, setShow] = useState(false);
  const { data, get, post, error } = useFetch();

  const handleClose = () => setShow(false);

  const Event = ({ event }) => {
    return (
      <span>
        <strong>{event.title[0]}</strong>
        <br />
        {(event.title[1] < 1 && "SOLD OUT") || (
          <>
            <i>{event.title[1]} seats available</i>
            <br />
            <Button variant="primary" className="btn btn-secondary">
              BOOK
            </Button>
          </>
        )}
        <br />
      </span>
    );
  };

  const handleClickBook = (event) => {
    get(`/promotions/${event.id}`);
    setShow(true);
  };

  const handleSubscriptionCreation = (promotionId) => {
    post(`/users/${currentUser.id}/subscriptions`, {
      promotion_id: promotionId,
    });
    setShow(false);
  };

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={promotions}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month", "week"]}
        onSelectEvent={(event) => handleClickBook(event)}
        components={{
          event: Event,
        }}
      />
      <p>{error && error}</p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Course: {data && data.course_title} on{" "}
            {data && data.clean_start_date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This course will be held in classroom n° {data && data.classroom_id}
            , your teacher will be {data && data.teacher_name}.
          </p>
          <p>You will receive a confirmation email shortly after signin up</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubscriptionCreation(data.id)}
          >
            Confirm my booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PromotionsCalendar;
