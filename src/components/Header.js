import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    // TODO : ADD PROPER LOGO. USE MID JOURNEY AND AI.
    return (
        <h1 className='justify-center align-middle text-6xl font-bold m-5 text-white'>EATS</h1>
    )
}

const Header = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    return (
        <>
        <div className="sticky top-0 z-20 w-full border border-amber-300">
                <div className="max-w-6xl py-4 mx-auto flex justify-between items-center">
                    <li className='flex '>
                        <ul className='px-5 text-white font-medium text-xl'><Link to="/">Home</Link></ul>
                        <ul className='px-5 text-white font-medium text-xl'><Link to="/about">About</Link></ul>
                        <ul className='px-5 text-white font-medium text-xl'><Link to="/contact">Contact</Link></ul>
                        <ul className='px-5 text-white font-medium text-xl'><strong>Cart</strong></ul>
                    </li>
       
                {useOnline() ? <h2 className="text-green-500">ONLINE</h2> : <h2>OFFLINE!</h2>}

                {(
                    loginStatus === false ?
                        <button className='mx-5 px-5 py-1 text-red-500 font-medium rounded-md bg-white' onClick={() => { setLoginStatus(true) }}><Link to='/login' >Login</Link></button> :
                        <button className='mx-5 px-5 py-1 text-red-500 font-medium rounded-md bg-white' onClick={() => { setLoginStatus(false) }}><Link to='/' >Logout</Link></button>
                )}
            </div>
            </div>
        <div className="relative -mt-16 ">
            
            <div className=" h-[60vh] w-full border border-amber-300">
                <div className="absolute -z-10  h-full w-full border border-red-300">
                    <img
                        className="relative object-cover w-full h-full"
                        src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                        alt="header image" ></img>
                </div>
                <div className="h-full flex flex-col items-center justify-center pb-10">

                    <Link to='/'><Title /></Link>
                    <h1 className="text-4xl text-center text-white">Discover the best food and drinks in Hyderabad!</h1>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;