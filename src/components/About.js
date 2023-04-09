import { Outlet, useOutletContext } from "react-router-dom";

// import useRestaurantMenu from "../utils/useRestaurantMenu";


const Section = ({title,desc}) => {
    return (
        <div className="border border-gray-600 p-5">
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="underline cursor-pointer">Show</p>
            <p className=" mt-2">{desc}</p>
        </div>
    )

}




const About = () => {

    return (
        <div className="max-w-7xl flex-grow mx-auto">
            <h1 className="text-2xl mt-5 font-bold text-center ">ABOUT THE APP</h1>
            <div className="my-7 max-w-5xl">
            <Section title ="About Us" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis." />
            <Section title ="Support" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis." />
            <Section title ="Careers" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis reprehenderit, quam quae quos molestiae voluptatum laudantium eveniet odit quasi fuga officiis esse ea ipsam reiciendis pariatur quisquam incidunt! Nobis." />
            </div>
            <Outlet />
        </div>
    )
}

export default About;