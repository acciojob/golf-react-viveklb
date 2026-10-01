import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            ballPosition: 0
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        this.setState({ renderBall: true });
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={{ left: `${this.state.ballPosition}px` }}></div>
		} else {
		    return <button className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        this.handleKeyDown = (event) => {
            if (event.key === "ArrowRight" || event.keyCode === 39) {
                this.setState((state) => ({
                    ballPosition: state.ballPosition + 5
                }));
            }
        };
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
