import UserClass from "./UserClass";
import { Component } from "react";
import { USER_ABOUT_DATA } from "../utils/constants";

//Scenario : Used Class Based Components and understanding Class Based Raect LifeCycle

class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "dummy",
                location : "Default"
            }
        }

        
    }

   async componentDidMount(){
        

        const data = await fetch(USER_ABOUT_DATA);
        const json = await data.json();

        this.setState({
            userInfo: json
        })



        
    }

    render(){

        const { name, location} = this.state.userInfo;
        
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Food Delivery App</h2>
                
                <UserClass name={name} location={location}/>
            </div>
        )
    }
}



export default About;