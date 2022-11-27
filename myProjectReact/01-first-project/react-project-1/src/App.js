import logo from './logo.svg';
import './App.css';

const App = () => {
   return (
      <div className="App">
         <ul>
            <li>css</li>
            <li>js</li>
            <li>html</li>
            <li>react</li>
            <li>project</li>
         </ul>
      </div>
   );
}

const Header = () => {
   return (
      <div>
         <a>Home</a>
         <a>News Feed</a>
         <a>Messages</a>
      </div>
   );
};
export default App;
