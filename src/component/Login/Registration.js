import React, { useState, useRef } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import useForceUpdate from 'use-force-update';
import { PASSWORD_REGEX } from '../../constants/Regex';

const Registration = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const forceUpdate = useForceUpdate();
    const { current: validator } = useRef(new SimpleReactValidator({
        element: (message) => <span className="text-danger small">{message}</span>,
        validators: {
            password_validation: {
                message: 'Invalid password.',
                rule: (val, params, instance) => instance.helpers.testRegex(val, PASSWORD_REGEX),
            },
        },
    }));

    const handleSingUp = () => {
        checkValidation()
        let registrationData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
        console.log(registrationData, "registrationData")
    }

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
        <div id="signup" >
            <h1>Sign Up for Free</h1>
            <form>
                <div className="top-row">
                    <div className="field-wrap">
                        <label>
                            First Name<span className="req">*</span>
                        </label>
                        <div style={{ marginBottom: "15px" }}>
                            <input
                                type="text"
                                required autocomplete="off"
                                className='mb-0'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {validator.message('First Name', firstName, 'required|alpha')}
                        </div>
                    </div>
                    <div className="field-wrap">
                        <label>
                            Last Name<span className="req">*</span>
                        </label>
                        <div style={{ marginBottom: "15px" }}>
                            <input
                                type="text"
                                required autocomplete="off"
                                className='mb-0'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {validator.message('Last Name', lastName, 'required|alpha')}
                        </div>
                    </div>
                </div>
                <div className="field-wrap">
                    <label>
                        Email Address<span className="req">*</span>
                    </label>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="email"
                            required
                            autocomplete="off"
                            className='mb-0'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {validator.message('Email Address', email, 'required|email')}
                    </div>
                </div>
                <div className="field-wrap">
                    <label>
                        Set A Password<span className="req">*</span>
                    </label>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            required
                            autocomplete="off"
                            className='mb-0'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {validator.message('Password', password, 'required|password_validation')}
                    </div>
                </div>
                <button
                    className="button button-block"
                    type="button"
                    onClick={() => handleSingUp()}
                >Sign Up</button>
            </form>
        </div>
    )
}
export default Registration