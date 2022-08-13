import React from "react";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <Sidebar handleLogout={handleLogout} user={user} />

        </div>
    );
};

export default Home;