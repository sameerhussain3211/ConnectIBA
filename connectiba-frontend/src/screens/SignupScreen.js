
import ibaImg from '../assets/images/iba.jpg';


import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


const SignupScreen = () => {
    const erp = useRef('');
    const password = useRef('');

    const navigate = useNavigate();

    const navigationHandling = (e) => {

        e.preventDefault();
        navigate('/profile-setup', {
            state: {
                erp: erp.current.value,
                password: password.current.value,
            }
        });
    }

    return (
        <div className="row m-0">
            <div className="col-6">
                <div className="container vh-100 d-flex align-items-center justify-content-center flex-column mw-100">
                    <div class="w-50 d-flex align-items-center flex-column">
                        <div className="logo mb-5 w-100">
                            <span className="fs-1">connect</span>
                            <span className="fs-1 text-maroon">IBA</span>
                        </div>
                        <div className="w-100 heading mb-4">
                            <h2>Sign Up</h2>
                        </div>
                        <form className="w-100 mb-5 pb-5" onSubmit={navigationHandling} novalidate>
                            <div class="mb-4">
                                <label htmlFor="erp" class="form-label">Erp</label>
                                <input type="number" class="form-control" ref={erp} id="erp" aria-describedby="emailHelp" style={{ height: "3rem" }} required />
                            </div>
                            <div class="mb-4">
                                <label htmlFor="InputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" ref={password} id="InputPassword1" style={{ height: "3rem" }} required />
                            </div>
                            <button type="submit" class="button-maroon btn btn-primary"
                            >Next</button>
                        </form>
                    </div>
                </div>
            </div>


            <div className="col-6 p-0">
                <div className="vh-100 d-flex align-items-center justify-content-center flex-column mw-100">
                    <img src={ibaImg} alt="not found" width="100%" height="100%" className="" />

                </div>
            </div>
        </div>
    )
}
export default SignupScreen;
