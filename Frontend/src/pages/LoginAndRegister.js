import { TextField, Button } from "@mui/material";
import "./loginAndRegister.css";
import ipConfig from "../ipConfig.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const LoginAndRegister = ({ type }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await axios.post(`${ipConfig.endpoint}/api/users/register`, {
        username,
        email,
        password,
      });

      toast.success("Successfully Registered", 3000);
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong", 3000);
    }
  };

  const loginUser = async () => {
    try {
      const reponse = await axios.post(`${ipConfig.endpoint}/api/users/login`, {
        email,
        password,
      });

      localStorage.setItem("authToken", reponse.data.token)
      toast.success("Successfully Registered", 3000);
      navigate("/home");
    } catch (error) {
      toast.error("Something went wrong", 3000);
    }
  };

  
  return (
    <section className="login-container">
      <div className="login-header">
        <div className="header">{type === "login" ? "LOGIN" : "REGISTER"}</div>
        <p>Get Started With Dream Music</p>
      </div>
      {type !== "login" && (
        <TextField
          label="User Name"
          variant="outlined"
          onChange={(event) => setUsername(event.target.value)}
        />
      )}
      <TextField
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        {type === "login" ? (
          <>
            I donot have Any Account ? <a href="/register">Register Now</a>
          </>
        ) : (
          <>
            Do you have any Account ? <a href="/login">Sign In</a>
          </>
        )}
      </div>
      <Button
        variant="contained"
        onClick={async () => {
          if (type !== "login") {
            await registerUser();
            return;
          }
          await loginUser();
        }}
      >
        {" "}
        Submit
      </Button>
    </section>
  );
};

export default LoginAndRegister;
