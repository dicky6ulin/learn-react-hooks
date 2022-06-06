import React, { useState } from 'react';
import "./Login.css";

const Login = ({callback}) => {

    const [user, setUser] = useState({ username: '', password: '' });
    const [isDisabled, setIsDisabled] = useState(true);
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [errorName, setErrorName] = useState({ username: '', password: '' });

    const handleUsernameChange = (event) => {
        if (event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)) {
            setUser({...user, username : event.target.value})
            setErrorName({ ...errorName, email: '' })
            setUsernameTouched(true)
            validate()
        } else {
            setErrorName({ ...errorName, email: 'Invalid email format' })
            validate()
        }
    }

    const handlePasswordChange = (event) => {
        if (event.target.value.length > 5) {
            setUser({...user, password : event.target.value})
            setErrorName({ ...errorName, password: '' })
            setPasswordTouched(true)
            validate()
        } else {
            setErrorName({ ...errorName, password: '6 min length' })
            validate()
        }
    }

    const validate = () => {
        if (errorName.username.length > 0 ||
            errorName.password.length > 0 ||
            !usernameTouched || !passwordTouched) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(user)
    }
    return (
        <>
            <div className="login main">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column login container">
                        <div className="d-flex align-items-center login containerCenter">
                            <div className="d-flex justify-content-end login containerEnd">
                                <div className="card w-50 login backgroundColorCard">
                                    <div className="card-body">
                                        <h2 className="login">
                                            <i className="fas fa-unlock-alt"></i> Login Page
                                        </h2>
                                        <br />
                                        <div>
                                            <div className={`form-group`}>
                                                <label htmlFor="exampleInputusername1">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputusername1"
                                                    aria-describedby="usernameHelp"
                                                    placeholder="Enter email"
                                                    onChange={handleUsernameChange}
                                                />
                                                <small className="text-danger">{errorName.email}</small>
                                            </div>
                                            <label htmlFor="exampleInputusername1">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                aria-describedby="usernameHelp"
                                                placeholder="Enter password"
                                                onChange={handlePasswordChange}
                                            />
                                            <small className="text-danger">{errorName.password}</small>
                                        </div>
                                        <br></br>
                                        <div>
                                            <button
                                                type="submit"
                                                className={`btn btn-primary login inputButtonawesome-button-sm`}
                                                disabled={isDisabled}
                                            >
                                                <i className="fas fa-sign-in"></i> Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;