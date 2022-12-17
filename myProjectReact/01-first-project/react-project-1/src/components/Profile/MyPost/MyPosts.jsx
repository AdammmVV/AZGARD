import s from './MyPosts.module.css'
import React from "react";
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {
    let posts = props.posts.map(p => <MyPost message={p.message} amountLike={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.onAddPost()
    }
    let onChangeTextarea = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea onChange={onChangeTextarea}
                          ref={newPostElement}
                          value={props.updatePost}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add</button>
            </div>
            <div className={s.post}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;