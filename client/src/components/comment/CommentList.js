const CommentList = ({comments}) => {

    if(comments.length === 0){
        return null;
    }
    return (
        // <div>
            <ul>
                {comments.map(comment => (
                    <li key={comment.commentId}> {comment.content} </li>
                ))}
            </ul>
        // </div>
    );
}

export default CommentList;