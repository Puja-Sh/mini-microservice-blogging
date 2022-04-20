import CreatePost from "./components/post/CreatePost";
import PostList from "./components/post/PostList";
import {useState} from "react";
import {Context} from "./context/Context";

function App() {
    const [context, setContext] = useState(-1);

    return (
        <Context.Provider value={[context, setContext]}>
            <div className="container">
                <h1>Your Blogging App</h1>
                <CreatePost/>
                <hr/>
                <h1> All the posts</h1>
                <PostList/>
            </div>
        </Context.Provider>

    );
}

export default App;
