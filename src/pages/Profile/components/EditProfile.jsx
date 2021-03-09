import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

const EditProfile = ( { onSubmit } ) => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [email, setEmail] = useState(currentUser.email);
  const [role, setRole] = useState(currentUser.role);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      firstName,
      lastName,
      email,
      role
    });
    handleClose();
  };

  return (
    <div className="EditProfile">

      <button className="my-2 btn btn-primary" onClick={handleShow}>Edit profile</button>

      <Modal show={show} onHide={handleClose} role="dialog" aria-labelledby="Form to add a new post" >
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <form show={show} onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="firstName">First name</label>
              <input
                type="text"
                required
                value={firstName}
                className="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="lastName">Last name</label>
              <input
                type="text"
                required
                value={lastName}
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                required
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="role">Role</label>
              <select value= {role} name="role" onChange={(e) => setRole(e.target.value)} >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
            <button className="btn btn-primary float-right">Update</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProfile;