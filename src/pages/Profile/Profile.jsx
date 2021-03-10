import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import EditProfile from "pages/Profile/components/EditProfile";
import ProfileDisplay from "pages/Profile/components/ProfileDisplay";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [profile, setProfile] = useState(currentUser);
  const [editing, setEditing] = useState(false);

  const { patch, get, data: updatedInfo } = useFetch();

  const updateProfile = (newDetails) => {
    patch("/api/profile", newDetails);
    setEditing(editing);
    get("/api/profile");
  };

  useEffect(() => {
    if (updatedInfo) {
      setProfile(updatedInfo);
    };
  }, [updatedInfo]);

  return (
    <div className="row my-3">
      <div className="col-4">
        <ProfileDisplay data={profile} />
        <EditProfile onSubmit={updateProfile} />
      </div>
      <div className="col-8 TODO --> List of booked training for the given user?">
        <h1>🛠 TODO - Fetch la liste des sessions où le user est inscrit 🛠</h1>
      </div>
    </div>
  );
};

export default Profile;
