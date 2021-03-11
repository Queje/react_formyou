import { Link } from "react-router-dom";
import "./LandingPage.scss";
import student from "assets/student.jpeg";
import education from "assets/education.svg";
import community from "assets/community.svg";
import world from "assets/world.svg";
import teacher from "assets/teacher.svg";
import society from "assets/society.svg";
import location from "assets/location.svg";
import money from "assets/money.svg";
import CourseList from "components/CourseList/CourseList.jsx";
import GlobalCalendar from "components/GlobalCalendar";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div>
      <section className="mb-5">
        <div className="jumbotron image-jumbotron text-center">
          <h1 className="display-4">The new standard of education.</h1>
          <hr className="my-4" />
          <h2>No premises, no teachers. It's free, and it's better.</h2>
          <p className="lead">
            <Link className="btn btn-primary btn-lg mt-5" to="/login">
              Get started
            </Link>
          </p>
        </div>
      </section>
      <CourseList />
      {currentUser && <GlobalCalendar />}
      <section className="mt-5 mb-5 pt-3 pb-3">
        <div className="container">
          <div className="row mb-8 text-center">
            <p className="lead">
              FormYou wants to recreate the bond between humans by changing the
              world of education. For this, we offer peer learning code training
              open to all.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <img className="svg-icons" src={society} alt="" />
              <h4>A disappointing status quo</h4>
              <p>
                Our society is dehumanized because it was designed for industry.
                We believe that individualism has lived: place for communities
                of minds
              </p>
            </div>
            <div className="col-md-4">
              <img className="svg-icons" src={world} alt="" />
              <h4>Towards a better world</h4>
              <p>
                To recreate meaning between humans, we are changing the world of
                education and empowering you to change the world.
              </p>
            </div>
            <div className="col-md-4">
              <img className="svg-icons" src={education} alt="education" />
              <h4>Education above all</h4>
              <p>
                We offer training in revolutionary pedagogy, without teachers,
                without shackles, without premises and filled with humanity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5 pt-3 pb-3">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-xl-4 col-lg-5 col-md-6 mb-4 mb-md-0 ">
              <img className="image-student" src={student} alt="student" />
            </div>
            <div className="col-lg-5 col-md-6">
              <h3>
                A unique and atypical training, designed with you, and for you
              </h3>
              <h4>During the training, the community becomes your family</h4>
              <p>
                At FormYou, the community is a tool for enhancing training. We
                give you an educational methodology, a learning platform, a
                community, and a curriculum. The rest is in your hands
              </p>
              <p>
                At FormYou, the community is a tool for enhancing training. We
                give you an educational methodology, a learning platform, a
                community, and a curriculum. The rest is in your hands
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5 pt-3 pb-3">
        <div className="container">
          <div className="row mb-6 text-center">
            <div className="col mb-5">
              <h1> FormYou summary in 4 points </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-11">
                <div className="row">
                  <div className="col-md-6 d-flex mb-4">
                    <img className="svg-icons mr-5" src={location} alt="" />
                    <div>
                      <h2>No premises ...</h2>
                      <h5 className="text-justify">
                        Every morning you get together with the community to
                        work. Wherever you want, online, in person.
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mb-4">
                    <img className="svg-icons mr-3" src={teacher} alt="" />
                    <div>
                      <h2>.. No teachers</h2>
                      <h5 className="text-justify">
                        Online resources, projects, united people to support
                        you, a unique educational platform and a community to
                        help you.
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mb-4">
                    <img className="svg-icons mr-5" src={money} alt="" />
                    <div>
                      <h2>Unbeatable rates</h2>
                      <h5 className="text-justify">
                        Our mission is education. Take advantage of unbeatable
                        prices.
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mb-4">
                    <img className="svg-icons mr-3" src={community} alt="" />
                    <div>
                      <h2>Intense and better</h2>
                      <h5 className="text-justify">
                        You and the community will come together to achieve the
                        goals of the day. Sometimes you will finish just before
                        midnight.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
