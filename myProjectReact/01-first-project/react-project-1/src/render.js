import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateTextareaMessage, updateTextareaPost} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRenderAppTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateTextareaPost={updateTextareaPost}
                 addMessage={addMessage}
                 updateTextareaMessage={updateTextareaMessage}/>
        </React.StrictMode>
    );
}
