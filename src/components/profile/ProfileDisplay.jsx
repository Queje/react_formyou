import capitalize from "capitalize";

const ProfileDisplay = ( {data} ) => {

  return (
    <>
      <h3>Profile</h3>
      <p>First name: {data.first_name}</p>
      <p>Last name: {data.last_name}</p>
      <p>Email: {data.email}</p>
      <p>Role: {capitalize(data.role)}</p>
      <p>Approved? {capitalize(data.is_approved ? "true" : "false")}</p>
    </>
  );
};

export default ProfileDisplay;