import React, { lazy, Suspense } from 'react'
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

const Contact = lazy(() => import("./components/Contact"))

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
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
    // </React.StrictMode>
)

// export default App