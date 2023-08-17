import React, { useState } from "react";
import "./login.css";
import { App } from "../../firebase/index.js";
import { useForm } from "react-hook-form";
import { loginAdmin } from "./controllers/firebase.js";
import { useNavigate } from "react-router-dom";
import Effect from "../../components/Effect/Effect";
import Cookies from "js-cookie";

const Login = () => {
  // use navigation
  const navigate = useNavigate();

  // handel form data
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [status, setStatus] = useState("");

  const { handleSubmit } = useForm();

  const signin = async () => {
    setStatus("loading");
    try {
      const user = await loginAdmin(email, password);
      if (user[0] === true) {
        setStatus("success");
        Cookies.set("adminUid", user[1].uid, { expires: 7 });
        navigate("/admin/" + user[1].uid);
      } else {
        setStatus("fail");
      }
    } catch (e) {
      setStatus("fail");
    }
  };
  return (
    <div className="log-in-admin center">
      <div className="container-log-in">
        <form className="login" onSubmit={handleSubmit(signin)}>
          <h3 className="title">Admin Login</h3>
          <div className="text-input">
            <i className="ri-user-fill"></i>
            <input
              type="email"
              placeholder="Eamil"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="text-input">
            <i className="ri-lock-fill"></i>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input
            className="login-btn"
            value={status === "loading" ? "loading..." : "Log in"}
            type={"submit"}
          />
          {status === "success" ? (
            <div className="sucsess">Success</div>
          ) : status === "fail" ? (
            <div className="fail">Email or Password Not Valid</div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
      <div className="log-in-effect-1 log-in-effect">
        <Effect />
      </div>
      <div className="log-in-effect-2 log-in-effect">
        <Effect />
      </div>
    </div>
  );
};

export default Login;
