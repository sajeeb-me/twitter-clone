import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import twitterimg from "../images/twitter.jpeg";
import TwitterIcon from '@mui/icons-material/Twitter';






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
    <div className="container">
      <div className="row">
        <div className="col-sm-11 offset-sm-10">
        <img  className="img-fluid" src={twitterimg}     style={{
                                //   flexDirection: 'row', 
                                //   alignItems: 'flex-end', marginTop: 15,
                                //  justifyContent:'flex-start',
                                //   marginLeft:-400,
                                //   marginRight:20,
                              flex: 1,
                               flexDirection: 'row', alignItems: 'flex-end', 
                              marginTop: 15,
                               justifyContent: 'flex-start', marginLeft:-300,
                              
                              position: 'absolute',
                              top:0,
                              left:-180,
                              padding:30
                         
                        
                             
                        }}
                        
         alt="img"    resizeMode="stretch"/>
        
       

     
      <div className="p-4 box">
      <TwitterIcon  style={{color:"skyblue" ,textAlign:"center",width:50}}/>

        <h2 className="mb-3">Happening now</h2>
        <br/>
        <div class="d-flex align-items-sm-center">
        <h6 className="mb-4"  style={{}}> Join twitter today </h6>
        </div>
        
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
