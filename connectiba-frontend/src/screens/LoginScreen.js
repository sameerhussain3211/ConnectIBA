
import ibaImg from '../assets/images/iba.jpg';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {
    const erp = useRef('');
    const password = useRef('');
    const [spinner, setSpinner] = useState(false)

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        const erp_id = erp.current.value;
        const pass = password.current.value;

        e.preventDefault();

        setSpinner(true);
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "erp_id": erp_id,
                "password": pass,
            }
            )
        }).then((response) =>
            (response.json())).then((response) => {
                console.log(response);

                setSpinner(false);
                navigate('/home', { state: (response.userData) });


            }).catch((err) => {
                setSpinner(false);
                console.log(err);
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
                            <h2>Sign In</h2>
                        </div>
                        <form className="w-100 mb-5 pb-5 needs-validation" onSubmit={handleSubmit} novalidate>
                            <div class="mb-4">
                                <label htmlFor="erp" class="form-label">ERP </label>
                                <input type="number" class="form-control" id="epr" aria-describedby="erp" min="1" style={{ height: "3rem" }}
                                    ref={erp} required />

                            </div>
                            <div class="mb-4">
                                <label htmlFor="InputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="InputPassword1" style={{ height: "3rem" }}
                                    ref={password} required />
                            </div>

                            <div className="mb-4 d-flex justify-content-between">
                                <h6 className="pe-3">New Here?</h6>
                                <a href="signup">Create Account</a>
                            </div>
                            <button type="submit" class={`button-maroon btn btn-primary ${spinner ? "disabled" : ""}`}>Login</button>
                        </form>
                        {
                            spinner ?
                                <div class="spinner-grow text-success" role="status">
                                </div> : <></>
                        }
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
export default LoginScreen;
