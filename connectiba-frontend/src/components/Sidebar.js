import './base/sidebar.css';  // Import the CSS file
import { useState, useEffect } from 'react';


const Sidebar = ({ onDataSend }) => {

    const [roomId, setRoom] = useState('1');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/posts/${roomId}`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.reverse());
                onDataSend(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [roomId]);

    return (
        <div className="shadow-sm card rounded-0 vh-100 w-100 border-0 px-4">
            <h4 className="fs-5 mb-2 mt-3"> Rooms</h4>
            <div>
                <ul class="nav nav-pills flex-column mb-2">

                    <li className="py-2 px-2 rounded mx-0 sidebar-elem transition" onClick={() => setRoom(1)}>
                        <i className="fs-5 fa-solid fa-globe pe-4 sidebar-elem-text transition"></i>
                        <a className="fs-mid text-dark sidebar-elem-text transition ">Public</a>
                    </li>

                    <li className="py-2 px-2 rounded mx-0 sidebar-elem transition" onClick={() => setRoom(2)}>
                        <i className="fs-5 fa-solid fa-globe pe-4 sidebar-elem-text transition"></i>
                        <a className="fs-mid text-dark sidebar-elem-text transition">Computer Science</a>
                    </li>
                    <li className="py-2 px-2 rounded mx-0 sidebar-elem transition" onClick={() => setRoom(3)}>
                        <i className="fs-5 fa-solid fa-globe pe-4 sidebar-elem-text transition"></i>
                        <a className="fs-mid text-dark sidebar-elem-text transition">Job Update</a>
                    </li>

                </ul>
            </div>
            <hr className='w-100 text-light' />

            <h4 className="fs-5 mb-2">Custom Rooms</h4>
            <div>
                <ul class="nav nav-pills flex-column mb-2">


                </ul>
            </div>
            <hr className='w-100 text-light' />
            <div className="d-flex">
                <button type="button" class="btn btn-outline-success me-2 w-100">Join Room</button>
            </div>
        </div>
    )
}

export default Sidebar;