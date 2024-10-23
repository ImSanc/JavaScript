import React from "react";

export class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { count : 0} ;
    }

    incrementCount  = () =>{
        this.setState({ count: this.state.count+1});
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>count is {this.state.count}</button>
            </div>
        )
    }
}