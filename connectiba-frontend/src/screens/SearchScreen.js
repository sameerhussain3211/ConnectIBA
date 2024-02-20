import { useState, useRef } from 'react';
import Navbar from "../components/Navbar";


import { useNavigate } from "react-router-dom";


const SearchScreen = () => {

    const navigate = useNavigate();

    const [selectedAttribute, setSelectedAttribute] = useState('name');
    const [searchResult, setSearchResult] = useState([]);
    const searchText = useRef('');

    const handleNavigationData = (erp) => {
        navigate('/profile', { state: erp} );
    };


    const handleSearch = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/search', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "attribute": selectedAttribute,
                "searchText": searchText.current.value,
            })
        }).then((response) => response.json())
            .then((data) => {
                setSearchResult(data.result)
                console.log(data.result);
            }).catch((err) => {
                console.log("error accoured", err);
            });


    };

    // useEffect(() => {

    // }, []);
    const handleSelectChange = (e) => {
        setSelectedAttribute(e.target.value);
    };

    return (
        <div className="vh-100" style={{ backgroundColor: 'var(--background)' }}>
            <Navbar></Navbar>

            <div className="row body mt-5 pt-5">
                <div className="col-5 offset-3 searchBox mb-5 pb-5">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Alumni"
                            style={{ width: '80%', height: '3rem' }}
                            ref={searchText}
                        />
                        <select
                            className="form-select"
                            id="inputGroupSelect01"
                            value={selectedAttribute}
                            onChange={handleSelectChange}
                        >
                            <option value="first_name">Name</option>
                            <option value="job_title">Job</option>
                            <option value="location">Location</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary button-maroon px-5 py-3 rounded-pill border-0" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>

                <div className="offset-3 col-5 results ">
                    <h5 className='mb-4'>Results</h5>
                    {
                        searchResult.map((user) => {
                            return <div className=" card shadow mb-2 px-3 py-2" key={user.erp_id}
                                onClick={() => handleNavigationData(user.erp_id)}>
                                <div className="row">
                                    <div className="col-2">
                                        <p>image</p>
                                    </div>
                                    <div className="col">
                                        <h4>{user.first_name + " " + user.last_name}</h4>
                                        <p className=" m-0">{user.gender}</p>
                                        <p className=" m-0">{user.phone_number}</p>
                                        <p className=" m-0">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default SearchScreen;
