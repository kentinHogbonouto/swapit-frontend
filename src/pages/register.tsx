import React, {useState} from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [err, setErr] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phoneNumber: null,
  });

  const sendRequest = async () => {
    setErr({
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phoneNumber: null,
    });
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      let response = await axios({
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        url: `https://swapti-api.onrender.com/api/v1/managements/user`,
        data: {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        },
      });

      setLoading(false);
    } catch (errors) {
      setLoading(false);
      errosHandle(errors);
    }
  };
  const errosHandle = (errors: any) => {
    if (errors.response.status === 422) {
      let stock: any = {};
      errors.response.data.data.forEach((el: any) => {
        stock[el.field] = el.message;
      });
      setErr(stock);
    }
  };
  return (
    <div className="main">
      <section className="">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                {err.firstName && (
                  <div className="alert alert-danger" role="alert">
                    {err.firstName}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                {err.lastName && (
                  <div className="alert alert-danger" role="alert">
                    {err.lastName}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                {err.email && (
                  <div className="alert alert-danger" role="alert">
                    {err.email}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {err.phoneNumber && (
                  <div className="alert alert-danger" role="alert">
                    {err.phoneNumber}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="number"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {err.password && (
                  <div className="alert alert-danger" role="alert">
                    {err.password}
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="password"
                    id="pass"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="re_pass"
                    placeholder="Comfirm password"
                  />
                </div>

                <div className="form-group form-button">
                  <span
                    id="signup"
                    className="btn btn-primary w-100"
                    onClick={sendRequest}
                  >
                    Register
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                  </span>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg"
                  alt="register image"
                />
              </figure>
              <a href="/login" className="signup-image-link">
                I already have an account
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
