import img from "../assets/images/iba.jpg";
import { useNavigate } from "react-router-dom";


const Navbar = (props) => {
    const navigate = useNavigate();
    const handleNavigationData = () => {
        navigate('/profile', { state: (props.userData.erp_id) });
    };

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-2 px-5 bg-white shadow-sm">
            <div className="container-fluid mx-5 py-1">
                <a className="navbar-brand" href="/home">
                    <span className="fs-3">CONNECT </span>
                    <span className="fs-2 text-maroon">IBA</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 bd-navbar">
                        <li className="nav-item me-2">
                            <a className="nav-link fs-5" href="/search">
                                <i className="fa fa-search"></i>
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link fs-5" href="#">
                                <i className="fa-regular fa-bell"></i>
                            </a>
                        </li>


                        <li className="nav-item" onClick={handleNavigationData}>
                            <a className="nav-link active" aria-current="page" >
                                <img src={img} alt="img error" height={'30rem'} width={'30rem'} className="rounded-circle" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;