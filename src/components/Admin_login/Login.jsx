import React, { useState } from "react";
import "./Login.css";
import loginImg2 from "../../Image/bro.png";
import { Link, useNavigate } from "react-router-dom";
import { useAPI } from "../../../src/Context";
// import logo from "../../Image/logo.jpg";
import logo from "../../Image/multispan-logo 2.png";


export default function Login() {
  const { loginUser } = useAPI();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };
  const UserLogin = () => {
    loginUser(login);
  };

  return (
    <>
      <div className="login_container">
        <img alt="" src={logo}  className="m_logo"/>

        <div className="login-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="mb-3 text-blue">Login Now</h3>
                <div className="bg-white shadow rounded">
                  <div className="row">
                    <div className="col-md-7 pe-0">
                      <div className="form-left h-100 py-5 px-5">
                        <form
                          action=""
                          className="row g-4"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="col-12">
                            <label>
                              Username<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-person-fill"></i>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                onChange={(e) => handleChange(e)}
                                name="email"
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <label>
                              Password<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">
                                <i className="bi bi-lock-fill"></i>
                              </div>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                onChange={(e) => handleChange(e)}
                                name="password"
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="inlineFormCheck"
                              />
                              <label
                                className="form-check-label"
                                for="inlineFormCheck"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <a href="#" className="float-end text-primary">
                              Forgot Password?
                            </a>
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn_primary px-5 float-end mt-4"
                              onClick={UserLogin}
                            >
                              Login
                            </button>
                            <Link id="signup" to="/register">
                              <button className="btn btn_primary px-5 float-start mt-4">
                                Sign Up
                              </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 ps-0 d-none d-md-block">
                      <div className="form-right h-100  text-white text-center pt-5 bg_image_login">
                        <img src={loginImg2} alt="" width="300rem" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
