import React from "react";
import CourseList from "components/CourseList/CourseList.jsx";
import LandingPage from "pages/LandingPage/LandingPage";

const Home = () => {
  return (
    <div className="Home">
      <CourseList/>
      <LandingPage />
    </div>
  );
};

export default Home;
