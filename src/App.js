import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar>
              <Routes>
                  <Route path="/" element={<Home /> } />
                  <Route path="login" element={<Login /> } />
                  <Route path="signup" element={<SignUp /> } />
              </Routes>
          </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
