import capitalize from "capitalize";

const ProfileDisplay = ( {data} ) => {

  return (
    <>
      <h3>Profile</h3>
      <p>{data.first_name} {data.last_name}</p>
      <p>{data.email}</p>
      <p>Role: {capitalize(data.role)}</p>
    </>
  );
};

export default ProfileDisplay;