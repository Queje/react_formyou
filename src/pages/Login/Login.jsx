import "./Login.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchToLogin } from "stores/Authentication/authMiddleware";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (e) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToLogin(data))) {
      history.push("/");
    }
  };

  return (
    <div className="login">
      <h1>Log in</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input id="submit-button" type="submit" value="Log in" />
      </form>
      <hr></hr>
      <p>Don't have an account yet?</p>
      <Link to="/register" >
        <span> Register now!</span>
      </Link>
    </div>
  );
};

export default Login;
