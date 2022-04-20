import {useContext, useEffect, useState} from "react";
import {callApiGet} from "../../api/postApi";
import CreateComment from "../comment/CreateComment";
import CommentList from "../comment/CommentList";
import {Context} from "../../context/Context";

const PostList = () => {
    const [posts, setPosts] = useState({});
    const [context,setContext] = useContext(Context);

    const fetchPost = async () => {
        const data = await callApiGet('/posts')
        setPosts(data.data);
        setContext(!context);
    }

    useEffect(() => {
        fetchPost();
    }, [context]);


    const renderedPosts = Object.values(posts).map((post) => {

        return (
            <div className="card" style={{width: '30%', margin: "20px", padding: "30px"}} key={post.postId}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
                {
                    post?.comments ?
                        <div>
                            <CommentList comments={post.comments} key={post.postId}/>
                        </div>
                    : null
                }

                <div>
                    <CreateComment postId={post.postId}/>
                </div>
            </div>
        )
    })

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    );

}

export default PostList;