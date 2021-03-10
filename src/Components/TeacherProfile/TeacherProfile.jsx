import FormationList from "Components/FormationList";
import ProfileCalendar from "Components/ProfileCalendar/ProfileCalendar";
import useFetch from "Hooks/useFetch";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const TeacherProfile = (props) => {
  const { data, get } = useFetch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    get(`/courses?teacher_id=${currentUser.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <FormationList courses={data} />
      <ProfileCalendar courses={data} />
    </div>
  );
};

export default TeacherProfile;
