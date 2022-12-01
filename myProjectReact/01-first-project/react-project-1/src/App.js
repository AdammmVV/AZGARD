import './App.css';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';

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
