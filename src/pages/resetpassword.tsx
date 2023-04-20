import React from 'react'

function resetpassword() {
  return (
    <div className='main'>
       <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="login image" /></figure>
                        <a href="/register" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Reset your password</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                
                                <input type="email" name="email" id="your_name" placeholder="Your Email"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Reset"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default resetpassword