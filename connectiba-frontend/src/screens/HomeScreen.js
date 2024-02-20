import { useState, useRef } from 'react';
import PostCard from '../components/PostCard';
import Sidebar from '../components/Sidebar';
import Navbar from "../components/Navbar";
import { useLocation } from 'react-router-dom';
import Comments from './comments';
import { useNavigate } from "react-router-dom";


const { convertImageToBase64 } = require('../utilities/helperFunc');
const getFromStore = require('../utilities/helperFunc');



const HomeScreen = () => {
    const [posts, setPosts] = useState([]);
    const [file, setFile] = useState(null);
    const content = useRef('');
    const fileInputRef = useRef(null);
    const loggedInUserData = useLocation();
    const navigate = useNavigate();


    const uploadPost = (e) => {
        const postData = content.current.value;
        const roomId = posts[0].room_id;
        const erp_id = loggedInUserData.state.erp_id;
        const img = fileInputRef.current.files[0].name;

        console.log("this is from file", fileInputRef.current.files[0].name);
        e.preventDefault();
        fetch('http://localhost:8080/post', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "title": img,
                "content": postData,
                "media": img,
                "room_id": roomId,
                "posted_by": erp_id
            }
            )
        }).then((response) => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }


    // File Handling Tests -------------------------------- Ends

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64data = reader.result.split(';base64,')[1];
                setFile(base64data);

            };
            reader.readAsDataURL(file);
        } else {
            setFile(null);
        }
    };
    const test = () => {
        convertImageToBase64(file)
            .then(base64Data => {
                console.log('Base64 image data:', base64Data);
                // You can use the base64Data as needed, for example, to display the image in an <img> tag
            })
            .catch(error => {
                console.error('Error converting image to Base64:', error.message);
            });
    }
    // File Handling Tests -------------------------------- Ends


    const handleDataFromChild = (data) => {
        setPosts(data);
    }



    const handleNavigationComments = (data) => {
        console.log("THIS IS USER DATA FROM OTHER", data);

        navigate('/comments', { state: data });
    };


    return (
        <div className="bg-primary-subtle">
            <Navbar userData={loggedInUserData.state}></Navbar>
            <div className="row bg-light">
                <div className="col-2 p-0" >
                    <div className="fixed-left sidebar ">
                        <Sidebar onDataSend={handleDataFromChild} className="mt-5 pt-5"></Sidebar>
                    </div>
                </div>

                {/* Upload form */}
                <div className="col-7" style={{ "marginTop": "4rem" }}>

                    <div className="post card  rounded-3 mb-3 px-5 py-4 border-0 shadow-sm">
                        <form onSubmit={uploadPost} method='POST' className="container mt-4" encType="multipart/form-data" noValidate>
                            <div className="title mb-4">
                                <h5>Share you thoughts</h5>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postContent" className="form-label">Post Content:</label>
                                <textarea className="form-control" id="postContent" name="postContent" rows="2"
                                    placeholder="What's on your mind?" ref={content} required></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="postImage" className="form-label">Upload Image:</label>
                                <input type="file" className="form-control" id="postImage" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
                            </div>

                            <div className="d-flex  flex-row-reverse pt-4">
                                <button type="submit" className="button-maroon btn btn-primary px-4">Post</button>
                            </div>
                        </form>
                    </div>

                    <>
                        {
                            posts.map((post) => {
                                console.log("Before posting", post)
                                return <div onClick={() => handleNavigationComments(post)}>
                                    <PostCard
                                        postedBy={post.User.first_name + " " + post.User.last_name}
                                        affiliation={post.title}
                                        likes={post.Likes}
                                        comments={post.Comments}
                                        createdAt={post.createdAt}
                                        media={post.title}
                                        key={post.post_id}>{post.content}</PostCard>
                                </div>

                            })
                        }

                    </>
                </div>

                <div className="col-3">
                    <div className="fixed-right sidebar">

                        <div className="jobs pt-1">
                            <h4 className="mb-3">New Jobs</h4>
                            <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div>
                            <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div>
                            <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div>
                        </div>
                        <div className="new-join pt-3">
                            <h4 className="mb-3">New Joined</h4>
                            <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div> <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div>   <div className="card px-3 py-2 border-0 shadow-sm mb-2">
                                <h2>this</h2>
                                <p>this is bot </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomeScreen;