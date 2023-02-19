import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { userLogin, userSignup } from "../../component/Api/Api";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmPass, setConfirmPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    Password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const body = {
      username: data.username,
      email: data.email,
      password: data.Password,
    };

    const res = await userSignup(body);
    alert(res.data.message);
    console.log("sinup", body);

    if (isSignUp) {
      if (data.Password === data.confirmPassword) {
        setConfirmPass(false);
      } else {
        setConfirmPass(true);
      }
    }
  };

  const resentForm = () => {
    setConfirmPass(false);
    setData({
      username: "",
      lastname: "",
      Password: "",
      confirmPassword: "",
      email: "",
    });
  };

  const handleClicktwo = async (e) => {
    e.preventDefault();

    const body = {
      email: data.email,
      password: data.Password,
    };

    const res = await userLogin(body);
    alert(res.data.message);
    console.log("response", body);

    dispatch({
      type: "successAuth",
      payload: res.data.user,
    });
    JSON.stringify(res.data.token);
    window.localStorage.setItem("token", res.data.token);
    console.log(res.data.user);
    if(res.data.success){
      navigate("/home");
    }else{
      navigate('')
    }
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <img src={Logo} alt="" style={{ marginTop: "60px" }} />
        <div className="webname">
          <h1>INS Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? "Signup" : "Login"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="first Name"
                className="infoinput"
                onChange={handleChange}
                name="username"
                value={data.username}
              />
              <input
                type="text"
                placeholder="lastName"
                className="infoinput"
                onChange={handleChange}
                name="lastname"
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email/userName"
              className="infoinput"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="Password"
              placeholder="password"
              className="infoinput"
              onChange={handleChange}
              value={data.Password}
              name="Password"
            />
            {isSignUp && (
              <input
                type="confirmPassword"
                placeholder="confirmPassword"
                className="infoinput"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "block" : "none",
              color: "red",
              fontSize: "12px",
              marginRight: "5px",
              alignSelf: "flex-end",
            }}
          >
            *Confirm Password is not same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resentForm();
              }}
            >
              {isSignUp
                ? "Already have an acount.Login!"
                : "Dont have an acount an. Signup"}
            </span>
          </div>
          {isSignUp ? (
            <button className="button infoButton" onClick={handleClick}>
              Signup
            </button>
          ) : (
            <button className="button infoButton" onClick={handleClicktwo}>
              Login
            </button>
          )}
        </form>
      </div>
  
    </div>
  );
};
// const Login = () => {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Login</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="user Name"
//             className="infoinput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoinput"
//             name="Password"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Dont have an acount an. Signup
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// const Signup = () => {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Signup</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="first Name"
//             className="infoinput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="lastName"
//             className="infoinput"
//             name="lasttname"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="user Name"
//             className="infoinput"
//             name="username"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoinput"
//             name="Password"
//           />
//           <input
//             type="text"
//             placeholder="confirmPassword"
//             className="infoinput"
//             name="confirmPassword"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an acount.Login!
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

export default Auth;
