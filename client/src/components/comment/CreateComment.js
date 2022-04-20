import {useState} from "react";
import {callApiPost} from "../../api/commentApi";

const CreateComment = ({postId}) => {
    const [content , setContent] = useState('');

    const onInput = (e) => {
        setContent(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        callApiPost(`/posts/${postId}/comments`, content );

        setContent('');
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input className="form-control" value={content} onChange={onInput}/>
                </div>
                <button className="btn btn-primary">Comment</button>
            </form>
        </div>
    );
}

export default CreateComment;