import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn"; // Import the SignIn component
import SignUp from "./pages/SignUp"; // Import the SignUp component
import ResetPassword from "./pages/ResetPassword";
import Verification from "./pages/Verification";
import "./App.css";

function App() {


  return (
    <Router>
        <Routes>   
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
    </Router>
  );
}

export default App;
