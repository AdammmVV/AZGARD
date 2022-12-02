import s from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {
   return (
      <div>
         My post
         <div>
            New post
         </div>
         <Post message="Hi, how are you?" amountLike='15' />
         <Post message="It's my first post" amountLike='20'/>
      </div>
   );
}

export default MyPost;
