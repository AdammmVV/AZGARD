import s from './Content.module.css'
import MyPosts from "./MyPost/MyPosts";

const Content = (props) => {
    return (
        <div>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Content;
