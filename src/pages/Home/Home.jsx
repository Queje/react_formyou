import React from "react";
import CourseList from "pages/CourseList/CourseList.jsx";
import LandingPage from "pages/LandingPage/LandingPage";

const Home = () => {
  return (
    <div className="Home">
      <LandingPage />
      <CourseList />
    </div>
  );
};

export default Home;
