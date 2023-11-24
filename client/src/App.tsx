import LoginPage from "./components/Auth/LoginPage/Login";
import RegisterPage from "./components/Auth/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/userdetails" element={<UserDetails />} />
            <Route path="/login" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
