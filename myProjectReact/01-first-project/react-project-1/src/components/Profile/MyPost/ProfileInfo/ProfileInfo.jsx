import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.contentImg}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg"/>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
