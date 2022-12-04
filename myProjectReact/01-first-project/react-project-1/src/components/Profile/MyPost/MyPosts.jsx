import s from './MyPosts.module.css'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPosts = () => {
   return (
      <div>
         <ProfileInfo/>
         <Post message="Hi, how are you?" amountLike='15' />
         <Post message="It's my first post" amountLike='20'/>
      </div>
   );
}

export default MyPosts;
