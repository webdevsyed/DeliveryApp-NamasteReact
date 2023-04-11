import React, { lazy, Suspense, useContext, useState } from 'react'
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Profile from "./components/ProfileClassDel";
import Error from "./components/Error";
// import Contact from './components/Contact';
import RestaurantDetails from './components/RestaurantDetails';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import UserContext from './utils/UserContext';


const Contact = lazy(() => import("./components/Contact"))

const App = () => {

    // const {name} = useContext(UserContext)
    const [num, setNum] = useState(99)
    const [email, setEmail] = useState("bilal@gmail.com")

    return (

        <UserContext.Provider
            value={{
                number: num,
                setNumber : setNum,
                email : email,
                setEmail : setEmail
            }}
        >
            <div className='h-full min-h-screen flex flex-col justify-between'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>

    )
}

// TODO : watch react-router-dom 6 videos to figure out even better way to do routing.

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: 'about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                    }
                ]
            },
            {
                path: 'Contact',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Contact />
                    </Suspense>
                )
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantDetails />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
        ]
    },


])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
)

// export default App