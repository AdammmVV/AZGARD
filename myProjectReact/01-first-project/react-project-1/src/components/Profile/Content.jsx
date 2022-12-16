import s from './Content.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPosts";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts contentPage={props.contentPage}
                     dispatch={props.dispatch}
                     updatePost={props.contentPage.updatePost}/>
        </div>
    );
}

export default Content;
