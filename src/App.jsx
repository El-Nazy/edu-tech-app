import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn"; 
import SignUp from "./pages/auth/SignUp"; 
import ResetPassword from "./pages/auth/ResetPassword";
import Verification from "./pages/auth/Verification";
import ProfileSetup from "./pages/auth/ProfileSetup";
import ExpertiseForm from "./pages/auth/ExpertiseForm";
import SecretSauceForm from "./pages/auth/SecretSauceForm";
import BioScreen from "./pages/auth/BioScreen";
import RegistrationSuccess from "./pages/auth/RegistrationSuccess";
import "./App.css";

function App() {


  return (
    <Router>
        <Routes>   
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/expertise-form" element={<ExpertiseForm />} />
          <Route path="/secret-sauce-form" element={<SecretSauceForm />} />
          <Route path="/bio-screen" element={<BioScreen />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
        </Routes>
    </Router>
  );
}

export default App;
