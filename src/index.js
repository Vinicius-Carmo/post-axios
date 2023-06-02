import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//Paginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

//Objeto de configuração de roteamento
const router= createBrowserRouter([
    {
      element: <App/>,
      children:[
        {
          path: '/',  //Home - todos os posts
          element: <Home/>,
        },
        {
          path:'/new', //Novo post
          element: <NewPost/>,
        }
      ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
