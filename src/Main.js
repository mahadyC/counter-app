import React from "react";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    additionHandler = () => {
        this.setState({counter: this.state.counter + 1});
    }
    removeHandler = () => {
        if(this.state.counter !== 0){
            this.setState({counter: this.state.counter - 1});
        }
    }
    resetHandler = () => {
        this.setState({counter: 0});
    }

    render(){

        let circleClass = `${
            (this.state.counter === 0) ? "" : this.state.counter % 2 === 0 ? "even" : "odd"
        } circle`;

        return(
            <main>
            <div>
                <div>
                    <h1 className={circleClass}>
                        {this.state.counter}
                    </h1>
                </div>
                <button onClick={this.additionHandler}>Add one</button>
                <button onClick={this.removeHandler}>Remove one</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        </main>
        );
    }
}

export default Main;

