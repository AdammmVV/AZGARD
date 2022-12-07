import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: '1', message: "Hi, how are you?", likesCount: '20'},
    {id: '2', message: "It's my first post", likesCount: '15'},
]

let dialogsData = [
    {id: '1', name: 'Valery'},
    {id: '2', name: 'Andrey'},
    {id: '3', name: 'Vladimir'},
    {id: '4', name: 'Alena'},
];

let messagesData = [
    {id: '1', message: 'How are you!'},
    {id: '2', message: 'How is you it-incubator!'},
    {id: '3', message: 'Hello!'},
    {id: '4', message: 'Are you from?!'},
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();