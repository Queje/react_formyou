import React from "react";
import CourseList from './CourseList';
import LandingPage from "./LandigPage";

const Home = () => {
  return (
    <div className="Home">
      <LandingPage />
      <CourseList />
    </div>
  );
};

export default Home;
