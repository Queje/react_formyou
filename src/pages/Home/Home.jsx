import { useSelector } from "react-redux";
import CourseList from "components/CourseList/CourseList.jsx";
import LandingPage from "pages/LandingPage/LandingPage";

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
