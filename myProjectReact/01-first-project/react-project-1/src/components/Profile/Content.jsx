import s from './Content.module.css'
import MyPosts from "./MyPost/MyPosts";
import {updateTextareaPost} from "../../redux/state";

const Content = (props) => {
    return (
        <div>
            <MyPosts contentPage={props.contentPage}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Content;
