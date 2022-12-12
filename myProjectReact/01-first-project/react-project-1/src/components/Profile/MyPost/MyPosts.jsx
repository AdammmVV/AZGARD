import s from './MyPosts.module.css'
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Post from "./Post/Post";
import {updateTextareaPost} from "../../../redux/state";

const MyPosts = (props) => {
    let posts = props.contentPage.postsData.map(p => <Post message={p.message} amountLike={p.likesCount}/>)
    return (
        <div>
            <ProfileInfo addPost={props.addPost}
                         updateTextareaPost={props.updateTextareaPost}
                         updatePost={props.contentPage.updatePost}/>
            {posts}
        </div>
    );
}

export default MyPosts;
