import capitalize from "capitalize";

const ProfileDisplay = ( {data} ) => {
  return (
    <>
      <p>{data.first_name} {data.last_name}</p>
      <p>{data.email}</p>
      <p>Role: {capitalize(data.role)}</p>
    </>
  );
};

export default ProfileDisplay;