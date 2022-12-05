import s from './MyPosts.module.css'
import Post from './Post/Post';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const MyPosts = () => {
    let postsData = [
        {id: '1', message: "Hi, how are you?", likesCount: '20'},
        {id: '2', message: "It's my first post", likesCount: '15'},
    ];

    let posts = postsData.map(p => <Post message={p.message} amountLike={p.likesCount}/>)

   return (
      <div>
         <ProfileInfo/>
          { posts }
      </div>
   );
}

export default MyPosts;
