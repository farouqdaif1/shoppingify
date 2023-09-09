import LoginPage from "./components/LoginPage/Login";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
