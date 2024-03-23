import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import './App.css';
import RootLayout from './RootLayout'
import {lazy, Suspense} from 'react'
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import UserProfile from './components/user-profile/UserProfile';
import AuthorProfile from './components/author-profile/AlumniProfile'

import Careers from './components/careers/Careers';
import Profile from './components/user-profile/Profile';


import ErrorPage from './components/ErrorPage';
import AlumniProfile from './components/author-profile/AlumniProfile';
import AlumniCardsPage from './components/user-profile/AlumniCardsPage';


function App() {

  const browserRouter=createBrowserRouter([{
    path:'',
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/signup',
        element:<Signup />
      },
      {
        path:"/signin",
        element:<Signin />
      },
      
      {
        path:"/user-profile",
        element:<UserProfile />,
        children:[
          {
            path:"profile",
            element:<Profile/>
          },
          {
            path:"careers",
            element:<Careers />
          },
          {
            path:"AlumniCardsPage",
            element:<AlumniCardsPage />
          },
          {
            path:'',
            element:<Navigate to='profile' />
          }
        ]
      },
      {
        path:"/author-profile",
        element:<AuthorProfile />,
        children:[

          {
            path:'',
            element:<Navigate to='author-profile' />
          }
        ]
      }
    ]
  }])

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;


