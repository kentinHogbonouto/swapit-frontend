import React from 'react'


function register() {
  return (
    <div className='main'>
       <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <input type="text" name="fname" id="fname" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="lname" id="lname" placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <input type="number" name="phone" id="phone" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                
                                <input type="password" name="re_pass" id="re_pass" placeholder="Comfirm password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" alt="register image"/></figure>
                        <a href="/login" className="signup-image-link">I already have an account</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default register