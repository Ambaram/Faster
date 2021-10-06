import React , {Component} from "react";
import Countdown from "react-countdown";

class Game extends Component{
    constructor(props){
        super(props);
        this.state= {
            show: true,
            plots : ""
        }
    }
    componentDidMount(){
        fetch("http://www.omdbapi.com/?t=Shutter+Island&plot=full&apikey=c19096fc").
        then(res => res.json()).
        then((data) => {
            this.setState({
                plots: data.plot
            })
        })
        console.log(this.state.plots)
    }
    
    render(){return <div className="col-sm-8 mx-auto" id="text">{this.state.plots}</div> }
}

export default Game