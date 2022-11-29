import logo from './logo.svg';
import './App.css';

const App = () => {
   return (
      <div className="app-wrapper">
         <header className="header">
            <img src="https://i.pinimg.com/736x/b4/53/d6/b453d623283ebd0c9c4241d641b80b85.jpg" />
         </header>
         <nav className="nav">
            <div>
               <a href="#">Profile</a>
            </div>
            <div>
               <a href="#">Messages</a>
            </div>
            <div>
               <a href="#">News</a>
            </div>
            <div>
               <a href="#">Music</a>
            </div>
            <div>
               <a href="#">Settings</a>
            </div>
         </nav>
         <div className="content">
            <div>
               <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-after/Landscape-BW.jpg" />
            </div>
            <div>
               ava + descrition 
               <img src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg" />
            </div>
            <div>
               My post
               <div>
                  New post
               </div>
               <div>
                  <div>
                     post 1
                  </div>
                  <div>post 2</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
