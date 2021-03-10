import React from "react";
import LandingPage from "pages/LandingPage/LandingPage";
import CourseList from "pages/CourseList/CourseList";

const Home = () => {
  return (
    <div className="Home">
      <CourseList/>
      <LandingPage />
    </div>
  );
};

export default Home;
