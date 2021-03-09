import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditProfile } from "../../stores/authentication/authMiddleware";
import EditProfile from "../../components/profile/EditProfile";
import ProfileDisplay from "../../components/profile/ProfileDisplay";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = (newDetails) => {
    dispatch(fetchEditProfile(newDetails));
    setEditing(editing);
  }

  return (
    <div className="row my-3">
      <div className="col-4">
        <ProfileDisplay data={currentUser} />
        <EditProfile onSubmit={updateProfile} />
      </div>
      <div className="col-8 TODO --> List of booked training for the given user?">
        <h1>🛠 TODO - Fetch la liste des sessions où le user est inscrit 🛠</h1>
      </div>
    </div>
  );
};

export default Profile;
