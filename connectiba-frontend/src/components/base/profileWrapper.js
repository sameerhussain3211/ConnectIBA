const ProfileWrapper = (props) => {
    return (
        <div className="card px-3 py-2 mb-2 shadow-sm">
            <div className="posts">
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
            </div>
            <div className="post-body">
                {props.children}
            </div>
        </div>
    );
}

export default ProfileWrapper;
