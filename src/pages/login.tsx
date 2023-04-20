import React from "react";
import "bootstrap/dist/css/bootstrap.css"; 

function login() {
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png"
                  alt="login image"
                />
              </figure>
              <a href="/register" className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="your_name"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <a href="/resetpassword" className="signup-image-link">
                    Forget Password
                  </a>
                </div>
                <div className="form-group form-button">
                  <button
                    type="submit"
                    id="signin"
                    className="btn btn-primary w-100"
                  >Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default login;
