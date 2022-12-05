import s from './MyPosts.module.css'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPosts = () => {
    let postData = [
        {id: '1', message: "Hi, how are you?", likesCount: '20'},
        {id: '2', message: "It's my first post", likesCount: '15'},
    ]
   return (
      <div>
         <ProfileInfo/>
         <Post message={postData[0].message} amountLike={postData[0].likesCount} />
         <Post message={postData[1].message} amountLike={postData[1].likesCount} />
      </div>
   );
}

export default MyPosts;
