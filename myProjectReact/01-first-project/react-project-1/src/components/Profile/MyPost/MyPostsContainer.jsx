import React from "react";
import {addPostActionCreat, updateTextareaPostActionCreat} from "../../../redux/content-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreat());
                }
                let onChangeTextarea = (text) => {
                    store.dispatch(updateTextareaPostActionCreat(text));
                }
                return <MyPosts updateNewPostText={onChangeTextarea}
                                onAddPost={addPost}
                                posts={state.contentPage.postsData}
                                updatePost={state.contentPage.updatePost}/>
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;