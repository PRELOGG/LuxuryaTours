import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './css/index.css'
import  DContext  from './components/Context/Usecontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<DContext>
<BrowserRouter>
 <App/>
 </BrowserRouter>
</DContext>
);


