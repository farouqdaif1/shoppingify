import devChallenge from "../../../assets/devchallenges.svg";
import facebook from "../../../assets/Facebook.svg";
import google from "../../../assets/Google.svg";
import github from "../../../assets/Gihub.svg";
import twitter from "../../../assets/Twitter.svg";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();
  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    await signup(email, password);
  };

  return (
    <div className=" register logContainer">
      <a href="/">
        <img
          src={devChallenge}
          className="logo devChallenge"
          alt="devChallenge logo"
        />
      </a>
      <h1>
        Join thousands of learners from
        <br /> around the world
      </h1>
      <p>
        Master web development by making real-life projects. There are multiple
        paths for you to choose
      </p>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit" id="submit">
          Start coding now
        </button>
        {error && <div className="errorMassage">{error.error}</div>}
      </form>
      <p className="or">or continue with these social profile</p>
      <ul className="social-media">
        <li>
          <img src={google} alt="google logo" />
        </li>
        <li>
          <img src={facebook} alt="facebook logo" />
        </li>
        <li>
          <img src={twitter} alt="twitter logo" />
        </li>
        <li>
          <img src={github} alt="github logo" />
        </li>
      </ul>
      <p id="already">
        Already a member?
        <span>
          <Link to="/login"> Login</Link>
        </span>
      </p>
    </div>
  );
};

export default RegisterPage;
