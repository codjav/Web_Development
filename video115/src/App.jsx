import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'

function App() {
  const router = createBrowserRouter([
    {
      path:"/home",
      element:<><Navbar/><Home/>
   </> },
    {
      path:"/about",
      element:<><Navbar/><About/>
  </>  },
    {
      path:"/contacts",
      element:<><Navbar/><Contacts/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar/><User/></>
    },
])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
