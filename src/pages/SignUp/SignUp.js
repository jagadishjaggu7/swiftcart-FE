import React, { useState } from 'react';
import './SignUp.css';
import logo from "../../assests/logo.png";
import Helmet from '../../components/helmet/Helmet';
import { useNavigate } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import ErrorToast, { errorToast } from '../../components/toast/ErrorToast';
import SuccessToast, { sucessToast } from '../../components/toast/SucessToast';
import SpinnerLoader from '../../components/spinLoader/SpinLoader';



const eyeSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const eyeClose = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown" }} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    userMobile: "",
    alterMobile: "",
    userEmail: "",
    userPassword: "",
    isAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "Please enter your first name.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Please enter your last name.";
    }
    if (!formData.userEmail) {
      newErrors.userEmail = "Please enter a valid Email address.";
    }
    if (!formData.userPassword) {
      newErrors.userPassword = "Please enter a password.";
    }
    if (!formData.isAccepted) {
      newErrors.isAccepted = "Please accept the terms and conditions.";
    }
    if (!formData.userMobile) {
      newErrors.userMobile = "Phone number required.";
    }
    if (!formData.alterMobile) {
      newErrors.alterMobile = " phone number required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setIsLoading(false);
      return;
    }


    const data = JSON.stringify(formData);
    console.log(data);

    try {
      const result = await fetchApi('POST', "/register", data);
      console.log(JSON.stringify(result));
      sucessToast("Data is Saved");
      setFormData({
        id: null,
        firstName: "",
        lastName: "",
        userMobile: "",
        alterMobile: "",
        userEmail: "",
        userPassword: "",
        isAccepted: false,
      });
    } catch (err) {
      if (err.message) {
        errorToast("Account Already Exists.");
      } else {
        errorToast("An unexpected error occurred.");
      }
      setIsLoading(false);
    }
  };


  return (
    <Helmet title="Sign-Up">
      <ErrorToast />
      <SuccessToast />
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={logo} alt="logo" className="logo_signup" />
        <h2 className="cart">Sign up for Swift Cart today!</h2>
        <p className="cart2">Welcome! Please sign up to get started.</p>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="label-text">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input-box"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="JOHN"
            />
            {errors.firstName && <small className="error-message">{errors.firstName}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="label-text">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="input-box"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="DOE"
            />
            {errors.lastName && <small className="error-message">{errors.lastName}</small>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="userMobile" className="label-text">Phone number</label>
            <input
              type="tel"
              id="userMobile"
              name="userMobile"
              className="input-box"
              maxLength={13}
              value={formData.userMobile}
              onChange={handleInputChange}
              placeholder="+91-9123456789"
            />
            {errors.userMobile && <small className="err-ph">{errors.userMobile}</small>}

          </div>

          <div className="form-group">
            <label htmlFor="alterMobile" className="label-text">Alternate number</label>
            <input
              type="tel"
              id="alterMobile"
              name="alterMobile"
              className="input-box"
              maxLength={13}
              value={formData.alterMobile}
              onChange={handleInputChange}
              placeholder="+91-9123456789"
            />
            {errors.alterMobile && <small className="err-ph">{errors.alterMobile}</small>}

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="label-text">Email Address</label>
          <input
            type="email"
            id="email"
            name="userEmail"
            className="input-box"
            value={formData.userEmail}
            onChange={handleInputChange}
            placeholder="JOHN.DOE@COMPANY.COM"
          />
          {errors.userEmail && <small className="err-email">{errors.userEmail}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="label-text">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="userPassword"
            className="input-box"
            value={formData.userPassword}
            onChange={handleInputChange}
            placeholder="••••••••••••••••••"
          />
          <span className="password-sigup" onClick={handlePasswordToggle}>
            {showPassword ? eyeSvg : eyeClose}
          </span>
          {errors.userPassword && <small className="err-pass">{errors.password}</small>}
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            name="isAccepted"
            className="check_input"
            checked={formData.isAccepted}
            onChange={handleInputChange}
          />
          <label htmlFor="agree" className="label-text-inline">
            I agree with the terms and conditions
          </label>
          {errors.isAccepted && <small className="err-agree">{errors.isAccepted}</small>}
        </div>

        <button type="submit" className="submit-button">{isLoading ? (
          <>
            <SpinnerLoader isLoading={isLoading} />
            <span style={{ marginLeft: '8px' }}>Loading...</span>
          </>
        ) : "Submit"}</button>

        <p className="signin-text">
          Already have an account? <span className='signin' onClick={() => navigate("/login")}>Sign in Now.</span>
        </p>
      </form>
    </Helmet>
  );
};

export default SignUp;
