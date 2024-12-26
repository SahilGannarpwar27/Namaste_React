//Scenario : Used Class Based Components and understanding Class Based Raect LifeCycle

import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        };
        
    }

    componentDidMount(){
        
    }

    render() {
        const {name, location} = this.props;


        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>

            </div>
        )
    }
}

export default UserClass;