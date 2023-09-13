import LoginPage from "./components/Auth/LoginPage/Login";
import RegisterPage from "./components/Auth/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/userdetails" element={<UserDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
