import FormationList from "components/FormationList";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { email } = currentUser;
  return (
    <div className="Profile">
      Profile page of {email}
      <FormationList />
    </div>
  );
};

export default Profile;
