import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import twitterimg from "../../image/twitter.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Login.css"


const Signup = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (

        <>
            <div className="login-container">

                <div className="image-container">
                    <img className="image" src={twitterimg} alt="twitterImage" />
                </div>


                <div className="form-container">
                    <div className="">
                        <TwitterIcon className="Twittericon" style={{ color: "skyblue" }} />

                        <h2 className="heading">Happening now</h2>

                        <div class="d-flex align-items-sm-center">
                            <h3 className="heading1"> Join twitter today </h3>
                        </div>


                        {error && <p>{error.message}</p>}
                        <form onSubmit={handleSubmit}>

                            <input className="email"
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <input className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />


                            <div className="btn-login">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="p-4 box mt-3 text-center">
                        Already have an account? <Link to="/">Log In</Link>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Signup;