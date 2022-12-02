import s from './Post.module.css'

const Post = () => {
   return (
      <div className={s.item}>
         <img src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg" />
         post 1
         <div>
            <span>like</span>
         </div>
      </div>
   );
}

export default Post;
