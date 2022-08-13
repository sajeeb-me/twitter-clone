import React from "react";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    
      <div className="homepage">
        Hello Welcome <br />
        {user && user.email}
      </div>
      
      <button className="home-btn" > Log Out</button>
    
   
    </>
  );
};

export default Home;
