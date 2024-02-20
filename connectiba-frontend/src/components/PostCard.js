import img from "../assets/images/iba.jpg";
import { useState, useEffect } from "react";
const PostCard = (props) => {
    const [imageUrl, setImageUrl] = useState('');
    const blob = new Blob(['This is text content'], { type: 'text/plain' });


    return (
        <div className="card rounded-3 shadow-sm border-0 py-3 px-4 mb-2">
            <div className="user-details d-flex mb-4">
                <div className="img pe-4">
                    <img src={img} alt="img error" height={'60rem'} width={'60rem'} className="rounded-circle" />
                </div>
                <div className="details">
                    <h5 className="mb-0">{props.postedBy}</h5>
                    <p className="fs-6">Student</p>
                </div>
            </div>
            <div className="post-body mb-4 px-3">
                <p className="fs-6">{props.children}</p>
                {
                    props.media != null ?
                        require(`../assets/images/${props.media}`) != null ?
                            <img src={require(`../assets/images/${props.media}`)} alt="img error" height={'90%'} width={'100%'} className="rounded-3" />
                            : <></>
                        : <></>
                }
            </div>
            <div className="timestamp mb-1">
                <p className="fs-6">{props.createdAt}</p>
            </div>

            <div className="border-top border-light-subtle reactions d-flex pt-3">
                <div className="like me-4">
                    <a href="#">
                        <i class="fa-regular fa-heart fs-4 pe-2"></i></a>
                    <span className="fs-5"> {props.likes ? (props.likes).length : ""}</span>
                </div>
                <div className="comments me-4">
                    <a href="#"><i className="fa-regular fa-comment fs-4 pe-2"></i></a>
                    <span className="fs-5">{props.comments ? props.comments.length : " "}</span>

                </div>
            </div>

        </div>
    );
}

export default PostCard;