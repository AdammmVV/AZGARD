import s from './ProfileInfo.module.css'
import React from "react";
import {addPostActionCreat, updateTextareaPostActionCreat} from "../../../../redux/content-reducer";


const ProfileInfo = (props) => {

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
            <div className={s.contentImg}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg" alt='black-white'/>
            </div>
            <div>
                <div>
                    <textarea onChange={onChangeTextarea}
                              ref={newPostElement}
                              value={props.updatePost}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
