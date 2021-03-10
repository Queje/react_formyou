import React from "react";
import CourseList from '../CourseList/courseList.jsx';
import LandingPage from "../LandingPage/landingPage";

const Home = () => {
  return (
    <div className="Home">
      <LandingPage />
      <CourseList />
    </div>
  );
};

export default Home;
