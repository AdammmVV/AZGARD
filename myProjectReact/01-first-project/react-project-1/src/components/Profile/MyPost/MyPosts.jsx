import s from './MyPosts.module.css'
import React from "react";
import {addPostActionCreat, updateTextareaPostActionCreat} from "../../../redux/content-reducer";
import MyPost from "./Post/MyPost";

const MyPosts = (props) => {
    let posts = props.contentPage.postsData.map(p => <MyPost message={p.message} amountLike={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreat(text));
    }
    let onChangeTextarea = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextareaPostActionCreat(text));
    }
    return (
        <div>
            <div>
                <textarea onChange={onChangeTextarea}
                          ref={newPostElement}
                          value={props.updatePost}/>
            </div>
            <div>
                <button onClick={addPost}>Add</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;