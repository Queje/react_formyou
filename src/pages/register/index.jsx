import './style.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchToRegister } from "../../stores/authentication/authMiddleware";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const register = async (e) => {
    const data = {
      user: {
        email: email,
        password: password,
      },
    };
    e.preventDefault();
    if (await dispatch(fetchToRegister(data))) {
      console.log("it awaited ok");
      history.push("/");
    }
  };

  return (
    <div className="register">
      <h1>Sign Up</h1>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input id="submit-button" type="submit" value="S'inscrire" />
      </form>
      <hr></hr>
      <div className="already-register" >
        <p>Déjà un compte ? </p>
        <button type="button" onClick={e => { history.push("/login");}} >Login</button>
      </div>
    </div>
  );
};

export default Register;
