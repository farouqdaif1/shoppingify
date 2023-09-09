import devChallenge from "../../assets/devchallenges.svg";
import facebook from "../../assets/Facebook.svg";
import google from "../../assets/Google.svg";
import github from "../../assets/Gihub.svg";
import twitter from "../../assets/Twitter.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login logContainer">
      <a href="/">
        <img
          src={devChallenge}
          className="logo devChallenge"
          alt="devChallenge logo"
        />
      </a>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          id="email"
          placeholder="Email"
          autoComplete="username"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit" id="submit">
          Start coding now
        </button>
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
        Don’t have an account yet?
        <span>
          <Link to="/"> &nbsp;Register</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
