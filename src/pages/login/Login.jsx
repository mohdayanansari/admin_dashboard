import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/auth.actions";
// css
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction(username, pass, navigate));
  };

  return (
    <div className="flex flex-col login-container pt-5  items-center justify-between">
      {/* -----------Header------------ */}
      <div className="glass w-[80%] mx-auto p-5 rounded-lg flex mb-[40px]">
        <div className="flex-1">
          <h1 className="text-gray-700 font-bold text-lg">
            NotBot Super Admin Dashboard
          </h1>
        </div>
        <div className="flex gap-5">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </div>
      {/* -----------Login Form Container------------ */}
      <div className="h-[500px] w-[400px] bg-white flex flex-col items-center rounded-lg relative">
        {/* Head */}
        <div className="w-[350px] h-[80px] bg-teal-800 rounded-lg absolute top-[-40px] flex justify-center items-center">
          <h1 className="text-xl font-bold text-white">Login In</h1>
        </div>
        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="flex  flex-col flex-1 items-center justify-between"
        >
          <div className="flex-1 flex flex-col gap-[30px] justify-center">
            <TextField
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="outlined-basic"
              label="Username"
              type="text"
              variant="outlined"
              className="w-[300px]"
              autoComplete="off"
            />
            <TextField
              name="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              className="w-[300px]"
              autoComplete="off"
            />
            <Button type="submit" variant="contained" className="w-[300px]">
              Login
            </Button>
          </div>

          <div className="pb-[20px]">
            <h1 className="text-sm text-gray-500">
              Don't have an account? {""}
              <Link to="/signup" className="text-teal-900 font-bold">
                Sign Up
              </Link>
            </h1>
          </div>
        </form>
      </div>
      {/* footer */}
      <div className="flex text-white w-[80%] pb-[10px]">
        <div className="flex-1 text-sm">
          <p>© 2022, made with by NotBot.</p>
        </div>
        <div className="flex gap-5 text-sm">
          <p>About Us</p>
          <p>Blog</p>
          <p>License</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
