import React from "react";
import {addPostActionCreat, updateTextareaPostActionCreat} from "../../../redux/content-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    console.log(state)
    let addPost = () => {
        props.store.dispatch(addPostActionCreat());
    }
    let onChangeTextarea = (text) => {
        props.store.dispatch(updateTextareaPostActionCreat(text));
    }
    return (<MyPosts updateNewPostText={onChangeTextarea}
                     onAddPost={addPost}
                     posts={state.contentPage.postsData}
                     updatePost={state.contentPage.updatePost}/>);
};

export default MyPostsContainer;