import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Profile/Content';
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Content />*/}
            </div>

        </div>
    );
}

export default App;
