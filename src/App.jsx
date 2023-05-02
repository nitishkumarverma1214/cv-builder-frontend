import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CvBuilder from "./Components/CvBuilder";
import Home from "./Pages/Home";
import PrivateRoutes from "./Components/utils/PrivateRoutes";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<CvBuilder />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
