import capitalize from "capitalize";

const ProfileDisplay = ( {data} ) => {
  return (
    <>
      <h5>{data.first_name} {data.last_name}</h5>
      <p>{data.email}</p>
      <p>{capitalize(data.role)}</p>
    </>
  );
};

export default ProfileDisplay;