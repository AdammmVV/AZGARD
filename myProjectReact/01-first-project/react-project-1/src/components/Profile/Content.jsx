import s from './Content.module.css'
import MyPost from './MyPost/MyPost';

const Content = () => {
   return (
      <div className={s.content}>
         <div className={s.contentImg}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg" />
         </div>
         <div className={s.avatar}>
            ava + descrition
            <img src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg" />
         </div>
         <MyPost/>
      </div>
   );
}

export default Content;
