import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Profile/Content';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav nav={props.state.nav}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/messages/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/profile' element={<Content store={props.store}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
