import React from 'react'
import App from './App.js'
import ReactDom from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
        <>
        <App/>
        </>
)