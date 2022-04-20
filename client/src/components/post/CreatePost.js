import {useContext, useEffect, useState} from "react";
import {callApiPost} from "../../api/postApi";
import {Context} from "../../context/Context";


const CreatePost = props => {
    const [title, setTitle] = useState('')
    const [context, setContext] = useContext(Context);

    const onInput= (e) => {
        setTitle(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(title.length > 0){
            // call api
            setContext(!context);

            callApiPost('/posts', title);

            setTitle('');
        } else {
            console.log('error')
        }

    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" value={title} onChange={onInput}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};


export default CreatePost;