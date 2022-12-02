import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Profile/Content'; 

const App = () => {
   return (
      <div className="app-wrapper">
         <Header />
         <Nav />
         <Content />
      </div>
   );
}

export default App;
