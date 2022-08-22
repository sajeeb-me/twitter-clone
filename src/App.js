import React from "react";

import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";

import Explore from "./allroutes/Explore";
import Notifications from "./allroutes/Notifications";
import Messages from "./allroutes/Messages";
import Bookmarks from "./allroutes/Bookmarks";
import Profile from "./allroutes/Profile";
import Lists from './allroutes/lists';
import More from "@mui/icons-material/More";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "./App.css";

function App() {
  return (

    <div className="app">

      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
                
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
    
           <Route path="/explore" element={<Explore/>}/>
           <Route path="/notifications" element={<Notifications/>}/>
           <Route path="/messages" element={<Messages/>}/>
           <Route path="/bookmarks" element={<Bookmarks/>}/>
           <Route path="/lists" element={<Lists/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/more" element={<More/>}/>



        </Routes>
      </UserAuthContextProvider>

    </div>
  );
}

export default App;
