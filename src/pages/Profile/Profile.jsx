import { useSelector } from "react-redux";
import ProfileDisplay from "components/ProfileDisplay/ProfileDisplay";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="row my-3">
      <div className="col-4">
        <ProfileDisplay data={currentUser} />
        <div className="TODO --> Component / Page Edit profile entries"></div>
      </div>

      <div className="col-8 TODO --> List of booked training for the given user?"></div>
    </div>
  );
};

export default Profile;
