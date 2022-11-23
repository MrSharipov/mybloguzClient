import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/home/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ShowUserPosts from "./components/dashboard/ShowUserPosts";
import EditProfile from "./components/dashboard/EditProfile";
import LogOut from "./pages/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar>
              <Routes>
                  <Route path="/" element={<Home /> } />
                  <Route path="login" element={<Login /> } />
                  <Route path="logout" element={<LogOut /> } />
                  <Route path="signup" element={<SignUp /> } />
                  <Route path="dashboard" element={<Dashboard /> } />
                  <Route path="/myposts" element={<ShowUserPosts /> } />
                  <Route path="/editprofile" element={<EditProfile /> } />
              </Routes>
          </Navbar>
      </BrowserRouter>
      
    </>
  );
}

export default App;
