import React from "react";
// import $ from 'jquery';
// import Popper from 'popper.js';
import { useState } from "react";
import Login from "./login";
import { Link } from "react-router-dom";

const Registration = (props) => {
    
    //Getting data from form and storing it
    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInput = (e)=>{
        const name = e.target.name;//to see which input field is being targeted

        const value = e.target.value;//to get value of targeted input

        setUserRegistration({...userRegistration, [name] : value}) // Setting value in the varialbles
    }

    const handleSubmit = (e)=>{
        e.preventDefault();//Prevents forms default behaviour on submitting that is refreshing the form
        //code to send data to blockchain
    }
    //-----------------------------------------------------------------------------------------------------------

    return (
        <div className="container">
            <div className="title">Registration</div>
            <form action="" onSubmit={handleSubmit}>
                <div className="user-details">

                    <div className="form-group input-box">
                        <label htmlFor="username" className="reg-field-label">Username :</label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Enter your username" required
                        value={userRegistration.username}
                        onChange={handleInput}/>
                    </div>

                    <div className="form-group input-box">
                        <label htmlFor="email" className="reg-field-label">Email :</label>
                        <input type="text" name="email" id="email" className="form-control" placeholder="email@provider.com" required
                        value={userRegistration.email}
                        onChange={handleInput}/>
                    </div>

                    {/* <div className="form-group input-box">
                        <label htmlFor="account" className="reg-field-label">Metamask Account Address :</label>
                        <input type="text" name="account" id="account" className="form-control" placeholder="0x724...." autoComplete="off" required
                        value={userRegistration.account}
                        onChange={handleInput}/>
                    </div> */}

                    <div className="form-group input-box">
                        <label htmlFor="password" className="reg-field-label">Password :</label>
                        <input type="password" name="password" id="password" className="form-control" placeholder="Enter password" autoComplete="off" required
                        value={userRegistration.password}
                        onChange={handleInput}/>
                    </div>

                    <div className="form-group input-box my-3">
                        <label htmlFor="confirmPassword" className="reg-field-label">Confirm Password :</label>
                        <input type="password" name="confirmPassword" id="confirm-password" className="form-control" placeholder="Confirm password" autoComplete="off" required
                        value={userRegistration.confirmPassword}
                        onChange={handleInput}/>
                    </div>
                </div>
                
                {/* <div className="gender-details">
                    <input type="radio" name="gender" id="dot-1" value={"male"} onChange={handleInput}/>
                    <input type="radio" name="gender" id="dot-2" value={"female"} onChange={handleInput}/>
                    <input type="radio" name="gender" id="dot-3" value={"other"} onChange={handleInput}/>

                    <span className="gender-title">Gender :</span>
                    <div className="category">
                        <label htmlFor="dot-1">
                            <span className="dot one"></span>
                            <span className="gender">Male</span>
                        </label>

                        <label htmlFor="dot-2">
                            <span className="dot two"></span>
                            <span className="gender">Female</span>
                        </label>

                        <label htmlFor="dot-3">
                            <span className="dot three"></span>
                            <span className="gender">Other</span>
                        </label>
                    </div>
                </div> */}

                <div className="button">
                    <input type="submit" name="register" value="Register" />
                </div>
                
               <div>

               <p class="text-gray-soft text-center small mb-2">Already have an account? 
               <Link to="/signin">SignIn</Link></p>

               </div>

            </form>
        </div>
    )
}

export default Registration;