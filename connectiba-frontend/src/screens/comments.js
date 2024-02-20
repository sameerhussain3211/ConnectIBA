import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import PostCard from '../components/PostCard';
import Navbar from "../components/Navbar";



const Comments = () => {

    const comment = useRef();
    const location = useLocation();
    const [post, setPost] = useState(location.state);

    useEffect(() => {
        fetch(`http://localhost:8080/single-post/${post.post_id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                console.log("is there a new data", data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);



    const uploadComment = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "content": comment.current.value,
                'post_id': post.post_id,
                'erp_id': 25258,
            }
            )
        }).then((response) => {

            console.log("commented", response)
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="vh-100" style={{ backgroundColor: 'var(--background)' }}>
            <Navbar></Navbar>

            <div className="row body mt-5 pt-5">
                <div className="offset-3 col-5 results ">
                    {
                        post != null ?
                            <PostCard
                                postedBy={post.User.first_name + " " + post.User.last_name}
                                affiliation={post.title}
                                likes={post.Likes}
                                comments={post.Comments}
                                createdAt={post.createdAt}
                                media={post.title}
                                key={post.post_id}>{post.content}</PostCard> : <></>

                    }
                    <div className="addComment mt-3" noValidate>
                        <form onSubmit={uploadComment} method='POST'>
                            <div className="d-flex">
                                <input type="text" ref={comment} className="form-control me-2 rounded-pill border" id="formGroupExampleInput" placeholder="comment" required />
                                <button type="submit" className="button-maroon btn btn-primary px-4">Post</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-3">
                        {
                            post.Comments.map((data) => {
                                return (
                                    <div key =  {data.comment_id}> 
                                        <hr style={{ width: '100%', margin: 0 }} />
                                        <div className="my-3">
                                            <h6 >{data.erp_id}</h6>
                                            <p className='m-0 '>{data.content}</p>
                                            <p className='m-0' style={{ fontSize: "10px" }}>{data.createdAt}</p>
                                        </div>
                                        <hr style={{ width: '100%', margin: 0 }} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div >
    );
}

export default Comments;
