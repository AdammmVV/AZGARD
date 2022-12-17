import s from './ProfileInfo.module.css'
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className={s.contentImg}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg" alt='black-white'/>
            </div>
            <div className={s.content}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
