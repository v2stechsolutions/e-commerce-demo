import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom"
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { PASSWORD_REGEX } from '../../constants/Regex';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIn = () => {
        checkValidation()
        let loginData = {
            email: email,
            password: password,
        }
        console.log(loginData, "loginData")
    }
    const forceUpdate = useForceUpdate();
    const { current: validator } = useRef(new SimpleReactValidator({
        element: (message) => <span className="text-danger small">{message}</span>,
        validators: {
            password_validation: {
                message: 'Invalid password.',
                rule: (val, params, instance) => instance.helpers.testRegex(val,PASSWORD_REGEX),
              },
        },
    }));

    const checkValidation = () => {
        if (validator.allValid()) {
            return true;
        }
        else {
            validator.showMessages();
            forceUpdate();
            return false;
        }
    }

    return (
        <div id="login">
            <h1>Welcome Back!</h1>
            <form>
                <div class="field-wrap">
                    <label>
                        Email Address<span class="req">*</span>
                    </label>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="email"
                            className='mb-0'
                            required
                            autocomplete="off"
                            name='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        {validator.message('Email Address', email, 'required|email')}
                    </div>
                </div>
                <div class="field-wrap">
                    <label>
                        Password<span class="req">*</span>
                    </label>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            required
                            className='mb-0'
                            autocomplete="off"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {validator.message('Password', password, 'required|password_validation')}
                    </div>
                </div>
                <p class="forgot"><Link to="/e-commerce-demo">Forgot Password?</Link></p>
                <button
                    class="button button-block"
                    type="button"
                    onClick={() => handleLoginIn()}
                >
                    Log In
                    </button>
            </form>
        </div>
    )
}
export default Login