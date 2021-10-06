import React, { Component } from 'react';
import Countdown from 'react-countdown';


class Difficulty extends Component{
    state= {
        levels : ['Easy', 'Medium', 'Hard'],
        plot : ""
    }
    
    handleDifficulty = level => {
        if (level == "Easy"){
            console.log(level)
            let text = fetch("https://www.omdbapi.com/?t=Shutter+Island&plot=full&apikey=c19096fc").then(res=>res.json()).then((data)=>(document.getElementById('game').innerHTML= data.Plot))
            let time = document.getElementById('easy')
            time = <Countdown date={Date.now() + 12000}/>
            const game = text+time
            return game
        }
        else if(level == "Medium" ){
            console.log(level)
            let text = fetch("https://www.omdbapi.com/?t=Source+Code&plot=full&apikey=c19096fc").then(res=>res.json()).then((data)=>(document.getElementById('game').innerHTML= data.Plot))
            let time = document.getElementById('medium')
            time= this.render(<Countdown date={Date.now() + 90000} />)
            return text , time
        }
        else {
            console.log(level)
            let text = fetch("https://www.omdbapi.com/?t=Argo&plot=full&apikey=c19096fc").then(res=>res.json()).then((data)=>(document.getElementById('game').innerHTML= data.Plot))
            let time = document.getElementById('hard')
            time= this.render(<Countdown date={Date.now() + 60000} />)
            return text , time
        }
    }

    render(){
        return <React.Fragment>
            <div className="d-flex flex-column">
                { this.state.levels.map(level => <button onClick={() => this.handleDifficulty(level)} className="btn btn-success col-sm-4 mx-auto my-2 p-2" id={level} key={level}>{level}</button>)}
            </div>
            </React.Fragment>
        
    }
}
export default Difficulty