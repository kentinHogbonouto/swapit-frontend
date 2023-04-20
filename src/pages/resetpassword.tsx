import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css"; 

function resetpassword() {
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
              <Link href="/register" className="signup-image-link">
                Create an account
              </Link>
            </div>

            <div className="signin-form d-flex flex-column align-items-center justify-content-center">
              <h2 className="form-title">Reset your password</h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="your_name"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group form-button">
                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    className="btn btn-primary w-100"
                  >Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default resetpassword;
