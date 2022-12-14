import s from './MyPost.module.css'

const MyPost = (props) => {
   return (
      <div className={s.item}>
         <img src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg" />
         {props.message}
         <div>
            <span>{props.amountLike} likes</span>
         </div>
      </div>
   );
}

export default MyPost;
