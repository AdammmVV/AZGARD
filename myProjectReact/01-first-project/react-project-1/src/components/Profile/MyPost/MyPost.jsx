import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {
   return (
      <div>
         My post
         <div>
            New post
         </div>
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
         <Post />
      </div>
   );
}

export default MyPost;
