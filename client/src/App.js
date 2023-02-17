import React from "react";
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css';
import Username from './components/Username';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Reset from './components/Reset';
import Register from './components/Register'

/*root router*/

const router = createBrowserRouter([
  {
    path:'/',
    element:<Username></Username>
  },
  {
    path:'/register',
    element:<Register></Register>
  },
  {
    path:'/password',
    element:<Password></Password>
  },
  {
    path:'/Reset',
    element:<Reset></Reset>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  },
  {
    path:'*',
    element:<PageNotFound></PageNotFound>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
