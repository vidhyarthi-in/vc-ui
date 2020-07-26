import React from 'react';
import Tilt from 'react-tilt'

export const Login = () => {
    return (
        <div className="limiter">
            <div className="container-login">
                <div className="wrap-login">
                    <div className="login-pic">
                        <Tilt>
                            <img src="images/login-img.png" alt="login-img"/>
                        </Tilt>
                    </div>
                    <form className="login-form">
                        <span className="login-form-title">
						    Member Login
					    </span>
                        <div className="wrap-input validate-input">
                            <input className="inputCls" type="text" name="email" placeholder="Email"/>
                            <span className="focus-input"></span>
                            <span className="symbol-input">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="wrap-input validate-input">
                            <input className="inputCls" type="password" name="pass" placeholder="Password"/>
                            <span className="focus-input"></span>
                            <span className="symbol-input">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>
                        <div className="container-login-form-btn">
                            <button className="login-form-btn">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
