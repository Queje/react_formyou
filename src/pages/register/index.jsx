import './style.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchToRegister } from "../../stores/authentication/authMiddleware";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("student");

  const dispatch = useDispatch();
  const history = useHistory();

  const register = async (e) => {
    const data = {
      user: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        role: role
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
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
        <select name="role" onChange={(e) => setRole(e.target.value)} >
          <option value="student">Etudiant</option>
          <option value="teacher">Professeur</option>
        </select>
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
