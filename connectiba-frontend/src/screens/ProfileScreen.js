import ProfileWrapper from "../components/base/profileWrapper";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const ProfileScreen = (props) => {
    const [userData, serUserData] = useState({});

    const location = useLocation();
    const erp = location.state ?? 25120;

    useEffect(() => {
        fetch(`http://localhost:8080/profile/${erp}`)
            .then((response) => response.json())
            .then((data) => {
                serUserData(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    return (
        <div className="vh-100" style={{ backgroundColor: 'var( --background)' }}>
            <Navbar></Navbar>
            <div className="row upper-nav-space">
                <div className="col-3 px-1">

                    <div className="vh-100 fixed-right about mt-4 py-5  mb-2 card px-5 shadow-sm">
                        <div className="">
                            <div className="image me-4 mb-5">
                                <div style={{ width: 200, height: 200, }} className="bg-primary border rounded-circle">

                                </div>
                            </div>
                            <div className="details">
                                <div className="user mb-3   ">
                                    <h4>{userData.first_name + " " + userData.last_name}</h4>
                                    <p className="m-0"><b>Gender:</b> {userData.gender}</p>
                                    <p className="m-0"><b>phone:</b> {userData.phone_number}</p>
                                    <p className="m-0"><b>Email:</b> {userData.email}</p>
                                    <p className="m-0"><b>Job:</b> {userData.current_job}</p>
                                    <p className="m-0"><b>Job:</b> {userData.current_job}</p>
                                    <p className="m-0"><b>Address:</b> {userData.city + ", " + userData.country}</p>
                                </div>
                                <div className="socialLinks d-flex">

                                    <i class="fa-brands fa-facebook fs-3 me-3" ></i>
                                    <i class="fa-brands fa-x-twitter fs-3 me-3"></i>
                                    <i class="fa-brands fa-github fs-3 me-3" ></i>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="pt-2 col-6">
                    <div className="body">
                        <ProfileWrapper title="Posts">
                            {
                                userData.Posts ? userData.Posts.map((post) => {
                                    return <PostCard className="shadow-0"
                                        postedBy={userData.first_name + " " + userData.last_name}
                                        affiliation={post.title}
                                        createdAt={post.createdAt}
                                        likes={post.Likes}
                                        comments={post.Comments}
                                        key={post.post_id}>{post.content}</PostCard>
                                    //     <PostCard
                                    // postedBy={post.User.first_name + " " + post.User.last_name}
                                    // affiliation={post.title}
                                    // likes={post.Likes}
                                    // comments={post.Comments}
                                    // createdAt={post.createdAt}
                                    // key={post.post_id}>{post.content}</PostCard>
                                }) : ""
                            }
                        </ProfileWrapper>

                        <ProfileWrapper title="Experience">

                        </ProfileWrapper>

                    </div>

                </div>

                <div className="col-2"></div>
            </div>
        </div>
    );
}
export default ProfileScreen; 