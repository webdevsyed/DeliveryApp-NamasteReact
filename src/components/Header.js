import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = ()=>{
    // TODO : ADD PROPER LOGO. USE MID JOURNEY AND AI.
    return(
        <h1 className='justify-center align-middle text-5xl font-bold m-5 text-white'>EATS</h1>
    )
}

const Header = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    return (
        <div className='bg-red-500 flex justify-between items-center'>
          <Link to='/'><Title/></Link> 
            <div >
                <li className='flex'>
                    <ul className='px-5 text-white font-medium text-xl'><Link to="/">Home</Link></ul>
                    <ul className='px-5 text-white font-medium text-xl'><Link to="/about">About</Link></ul>
                    <ul className='px-5 text-white font-medium text-xl'><Link to="/contact">Contact</Link></ul>
                    <ul className='px-5 text-white font-medium text-xl'><strong>Cart</strong></ul>
                </li>
            </div>

           {useOnline() ? <h2>ONLINE</h2> : <h2>OFFLINE!</h2>}
            
                {(
                loginStatus === false ?
                    <button className='mx-5 py-2 px-4 text-red-500 font-medium rounded-xl bg-white' onClick={() => { setLoginStatus(true) }}><Link to='/login' >Login</Link></button> :
                    <button className='mx-5 py-2 px-4 text-red-500 font-medium rounded-xl bg-white' onClick={() => { setLoginStatus(false) }}><Link to='/' >Logout</Link></button>
            )}
         
        </div>
    )
}

export default Header;