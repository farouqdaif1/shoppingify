import devChallenge from "../../../assets/devchallenges.svg";
import facebook from "../../../assets/Facebook.svg";
import google from "../../../assets/Google.svg";
import github from "../../../assets/Gihub.svg";
import twitter from "../../../assets/Twitter.svg";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { GoogleLogin } from "@react-oauth/google";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    await login(email, password);
  };

  return (
    <div className="login logContainer">
      <a href="/">
        <img
          src={devChallenge}
          className="logo devChallenge"
          alt="devChallenge logo"
        />
      </a>
      <h1 id="loginHeader">Login</h1>
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
        <button disabled={loading} type="submit" id="submitLogin">
          Login
        </button>
        {error && <div className="errorMassage">{error.error}</div>}
      </form>
      <p className="or">or continue with these social profile</p>
      <ul className="social-media">
        <li>
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("response")}
          />
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
        Don’t have an account yet?
        <span>
          <Link to="/register"> &nbsp;Register</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
