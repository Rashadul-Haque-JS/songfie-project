import React, { useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { enabled } from "../../features/booleanSlicer";
import { resetPassword } from "../../api/api";
import "./Auth.scss";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const params = useParams();
  const id = params.id
  const token = params.token
  
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword(id, token, password);
      toast.success(res.data.message, { duration: 5000 });
      dispatch(enabled())
      navigate('/auth')
    } catch (err) {
      toast.error(err.message, { duration: 5000 });
    }

  };



  return (
    <div className="reset-password ">
      <div className="resetWrapper">
        <div className="resetText">
          <h1 className="h3">Songfie respect and appriciate your singing</h1>
        </div>
      </div>
      <div className="reset-form-container">
        <div className="form-group">
          <form className="reset-form" onSubmit={handleSubmit}>
            <label className="fw-bold">Reset your password</label>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              value={confirmPW}
              onChange={(e) => setConfirmPW(e.target.value)}
              required
            />
            <button>Reset</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
