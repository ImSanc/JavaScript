import React from "react";

export class ClassBasedEffect extends React.Component{
    componentDidMount(){
        console.log("Component mounted");
    }

    componentWillUnmount() {
        console.log("Component UnMounted");
    }

    render(){
        return <div>This is class based component</div>
    }
}