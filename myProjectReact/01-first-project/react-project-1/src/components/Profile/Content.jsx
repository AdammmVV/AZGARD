import s from './Content.module.css'
import MyPosts from "./MyPost/MyPosts";

const Content = (props) => {
    return (
        <div>
            <MyPosts contentPage={props.contentPage}/>
        </div>
    );
}

export default Content;
