import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../../api/api";
import { addLogedUser, addToken } from "../../../features/users/authSlicer";
import { addSignup, resetTrue } from "../../../features/booleanSlicer";
import { setLocalStorage } from "../../../common/localStorage";
import '../Auth.scss'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(email, password);
      if (res.data.token) {
        dispatch(addLogedUser(res.data.currentUser));
        dispatch(addToken(res.data.token));
        setLocalStorage("user", res.data.currentUser);
        setLocalStorage("token", res.data.token);
        // dispatch(getPhoto(res.data.userData._id))
        navigate("/songs");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleSignup = () => {
    dispatch(addSignup());
  };

  const handelePassword = () => {
    dispatch(resetTrue());
  };

  return (
    <div className=" w-75 border-0 text-primary py-3 text-muted">
         <div className='text-animated text-center mb-3'>
            Singing's Life
          </div>
      <form className="form-group form-control bg-dark " onSubmit={handleSubmit}>
        <fieldset className="form-group form-control my-2 w-100">
          <input className="w-100 my-1"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className="form-group form-control my-2 w-100">
          <input className="w-100 my-1"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <button className="w-100 text-light py-1 bg-primary mb-3 rounded">login</button>
      </form>
      <div className="d-flex justify-content-between align-items-center ">
        <div onClick={handelePassword}>
        <Link to={'/auth'} style={{ textDecoration: "underline" }}>
            Forgot password?
          </Link>
        </div>
        <div onClick={handleSignup}>
          <Link to={'/auth'} style={{ textDecoration: "underline" }}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
