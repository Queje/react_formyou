import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditProfile from "pages/Profile/components/EditProfile";
import ProfileDisplay from "pages/Profile/components/ProfileDisplay";
import TeacherFeed from "pages/Profile/components/TeacherFeed/TeacherFeed";
import AdminFeed from "pages/Profile/components/AdminFeed/AdminFeed";
import StudentFeed from "pages/Profile/components/StudentFeed/StudentFeed";
import StudentCalendar from "pages/Profile/components/StudentFeed/StudentCalendar";
import useFetch from "hooks/useFetch";

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
    }
  }, [updatedInfo]);

  return (
    <div className="row my-5">

      <div className="col-4 text-center">
        <ProfileDisplay data={profile} />
        <EditProfile onSubmit={updateProfile} />
      </div>

      {currentUser.role === "admin" && (
        <div className="col-8">
          <AdminFeed />
        </div>
      )}

      {currentUser.role === "teacher" && (
        <>
          <TeacherFeed />
        </>
      )}

      {currentUser.role === "student" && (
        <>
          <div className="col-8">
            <StudentFeed />
          </div>
          <div className="container text-center">
            <StudentCalendar />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
