import { useSelector } from "react-redux";
import ProfileDisplay from "Components/ProfileDisplay/ProfileDisplay";
import FormationList from "Components/FormationList";

const Profile = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="container row my-3">
      <div className="col-4">
        <ProfileDisplay data={currentUser} />
        <div className="TODO --> Component / Page Edit profile entries"></div>
      </div>

      <div className="col-8 TODO --> List of booked training for the given user?"></div>
      {currentUser.role === "teacher" && <FormationList />}
    </div>
  );
};

export default Profile;
