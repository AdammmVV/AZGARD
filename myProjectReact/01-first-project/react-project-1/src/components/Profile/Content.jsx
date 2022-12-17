import s from './Content.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Content = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />

                {/*// contentPage={props.contentPage}*/}
                {/*//      dispatch={props.dispatch}*/}
                {/*//      updatePost={props.contentPage.updatePost}/>*/}
        </div>
    );
}

export default Content;
