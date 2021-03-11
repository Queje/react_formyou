import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "hooks/useFetch";
import EditProfile from "pages/Profile/components/EditProfile";
import ProfileDisplay from "pages/Profile/components/ProfileDisplay";
import AdminFeed from "pages/Profile/components/AdminFeed";
import StudentFeed from "pages/Profile/components/StudentFeed";

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
    <div className="row my-3">
      <div className="col-4 text-center">
        <ProfileDisplay data={profile} />
        <EditProfile onSubmit={updateProfile} />
      </div>

      <div className="col-8">        
        {currentUser.role === "admin" &&
          <AdminFeed />       
        }
        
        {currentUser.role === "teacher" &&
          <h2>Coucou teacher WIP Paul</h2>
        }

        {currentUser.role === "student" &&
          <StudentFeed />
        }
      </div>


    </div>
  );
};

export default Profile;
