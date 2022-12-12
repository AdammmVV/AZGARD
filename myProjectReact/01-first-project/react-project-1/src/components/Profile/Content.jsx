import s from './Content.module.css'
import MyPosts from "./MyPost/MyPosts";
import {updateTextareaPost} from "../../redux/state";

const Content = (props) => {
    return (
        <div>
            <MyPosts contentPage={props.contentPage}
                     addPost={props.addPost}
                     updateTextareaPost={props.updateTextareaPost}/>
        </div>
    );
}

export default Content;
