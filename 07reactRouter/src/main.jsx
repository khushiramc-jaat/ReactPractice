import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.jsx'
import './index.css'
import { RouterProvider, createRoutesFromElements  } from 'react-router-dom'
import { createBrowserRouter ,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.js'


/*const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>,

            },
            {
                path:"contact",
                element:<Contact/>,

            }
        ]
    }
])*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="user/:userid" element={<User/>}/>

        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
