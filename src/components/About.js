import { Outlet, useOutletContext } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext"



const Section = ({ title, desc, isVisible, setIsVisible }) => {

    
    return (
        <div className="border border-gray-600 p-5">
            <h1 className="font-bold text-xl">{title}</h1>
            <p
                className="underline cursor-pointer"
                onClick={() => { setIsVisible() }}>
                {isVisible ? "Hide" : "Show"}</p>
            {isVisible && <p className="mt-2">{desc}</p>}
        </div>
    )
}


const About = () => {
    const {number , email} = useContext(UserContext)
console.log(number)
console.log(email)
// console.log(setName)
    const [isVisible, setIsVisible] = useState("about")

    return (
        <div className="max-w-7xl w-full flex-grow mx-auto">
            {/* <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
             <h1>{name}</h1> */}
            <h1 className="text-2xl mt-5 font-bold text-center ">ABOUT THE APP</h1>
            <div className="my-7 max-w-5xl mx-auto ">
                <Section
                    title="About Us"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis."
                    isVisible={isVisible == "about"}
                    setIsVisible={() => { setIsVisible(isVisible == "about" ? "none" : "about") }} />
                <Section
                    title="Support"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis."
                    isVisible={isVisible == "support"}
                    setIsVisible={() => { setIsVisible(isVisible == "support" ? "none" : "support") }} />
                <Section
                    title="Careers"
                    desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis."
                    isVisible={isVisible == "careers"}
                    setIsVisible={() => { setIsVisible(isVisible == "careers" ? "none" : "careers") }} />
            </div>
            <Outlet />
        </div>
    )
}
export default About;