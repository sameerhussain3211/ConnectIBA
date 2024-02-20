
import ibaImg from '../assets/images/iba.jpg';

import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {


    const navigate = useNavigate();

    const location = useLocation();

    const erp = location.state.erp;
    const password = location.state.password;
    const emailRef = useRef('');
    const phoneNumRef = useRef('');
    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const cnicRef = useRef('');
    const dobRef = useRef('');
    const genderRef = useRef('');
    const countryRef = useRef('');
    const cityRef = useRef('');
    const provinceRef = useRef('');
    const jobRef = useRef('');


    const handleSubmit = (e) => {
        const formData = {
            erp_id: erp,
            password: password,
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            date_of_birth: dobRef.current.value,
            gender: genderRef.current.value,
            phone_number: phoneNumRef.current.value,
            cnic_number: cnicRef.current.value,
            city: cityRef.current.value,
            country: countryRef.current.value,
            current_job: jobRef.current.value,
        };

        console.log(formData);
        e.preventDefault();

        fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formData)
        }).then((response) =>
            (response.json())).then((response) => {
                navigate('/');
                console.log(response);

            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="row m-0">
            <div className="col-7">
                <div className="m-5 p-5" >

                    <div className="logo mb-5 w-100">
                        <span className="fs-1">connect</span>
                        <span className="fs-1 text-maroon">IBA</span>
                    </div>
                    <div className="mb-4">
                        <h5>Setup your Profile</h5>
                    </div>
                    <div className="vh-100">
                        <form className="row g-3" onSubmit={handleSubmit} novalidate>
                            <div className="col-12">
                                <h5>Personal Info</h5>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" ref={emailRef} id="inputEmail" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input type="number" min="1111111111" max="9999999999999" ref={phoneNumRef} className="form-control" id="phoneNum" required />
                            </div>


                            {/* Name */}
                            <div className="col-md-6">
                                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" ref={firstNameRef} id="inputFirstName" required />
                            </div>
                            <div className="col-md-6 mb-5">
                                <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" ref={lastNameRef} id="inputLastName" required />
                            </div>

                            {/* other */}

                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">CNIC</label>
                                <input type="text" className="form-control" ref={cnicRef} id="inputCity" required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Date of Birth</label>
                                <br />
                                <input type="date" id="datepicker" name="datepicker" ref={dobRef} className="form-control" max="2007-1-1" min="1950-1-1" required />

                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Gender</label>
                                <select id="inputState" class="form-select" ref={genderRef} required>
                                    <option selected>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>

                            </div>
                            {/* Address */}
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">country</label>
                                <input type="text" className="form-control" id="inputAddress2" ref={countryRef} placeholder="" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" ref={cityRef} required />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Province</label>
                                <input type="text" className="form-control" ref={provinceRef} id="inputCity" required />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" ref={jobRef} id="jpb" required />
                            </div>

                            {/* submit */}
                            <div className="col-12 pt-5 ">
                                <button type="submit" class="button-maroon btn btn-primary me-2">Next</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


            <div className="col-5 p-0">
                <div className="sticky-top vh-100 mw-100">
                    <img src={ibaImg} alt="not found" width="100%" height="100%" className="" />

                </div>
            </div>
        </div>
    )
}

export default ProfileSetup;