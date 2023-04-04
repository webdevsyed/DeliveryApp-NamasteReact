import { Component } from "react";
import { useOutletContext } from "react-router-dom";

class ProfileClassDel extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("componentDidMount -- Profile")
    }

    render(){
        const [var1 , var2] = useOutletContext();

        return (
            <>
           <h1>Profile Component!!</h1> 
           <p>{var1} and {var2} </p>
            </>
        )
    }
}

export default ProfileClassDel