import { useSelector } from "react-redux";
import LandingPage from "pages/LandingPage/LandingPage";
import CourseList from "pages/CourseList/CourseList.jsx";

const Home = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);

  if (!currentUser) {
    return (
      <div className="Home">
        <LandingPage />
        <CourseList />
      </div>
    );
  ;}

  return (
    <div className="Home">
      <CourseList />
    </div>
  );
};

export default Home;
