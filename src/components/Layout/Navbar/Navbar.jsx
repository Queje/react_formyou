import "./Navbar.scss";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchToLogout } from "stores/Authentication/authMiddleware";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(fetchToLogout(token));
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg static-top py-2 px-4">
      <div className="mr-auto">
        <Link to="/" className="navbar-brand text-white">
          FormYou
        </Link>
      </div>

      {!currentUser && (
        <>
          <Link className="nav-link" to="/register">
            Sign up
          </Link>
          <Link className="nav-link btn btn-primary" to="/login">
            Log in
          </Link>
        </>
      )}

      {currentUser && currentUser.role === "admin" && (
        <>
          <Link className="nav-link" to="/admin">
            Dashboard Admin
          </Link>
        </>
      )}

      {currentUser && (
        <>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <button className="nav-link btn btn-danger" onClick={logout}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
