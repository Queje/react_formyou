import { useSelector } from "react-redux";
import LandingPage from "pages/LandingPage/LandingPage";

const Home = () => {

  const currentUser = useSelector((state) => state.auth.currentUser);

  if (!currentUser) {
    return (
      <div className="Home">
        <LandingPage />
      </div>
    );
  ;}

  return (
    <div className="Home">
      <LandingPage />
    </div>
  );
};

export default Home;
