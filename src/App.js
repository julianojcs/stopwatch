import React from 'react';
import Stopwatch from './Components/Stopwatch'
import Button from './Components/Button'
import ClockLabel from './Components/ClockLabel'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      seconds: 0,
      minutes: 0,
      stop: false,
      nameStop: "Stop",
      name: "Stopwatch", 
      partial: ""
    };
  }
   ResetCronometro() {
    this.setState({ 
      ...this.state,
      seconds : 0,
      minutes : 0,
      partial : ""
    })     
   }
  
  partial(){
    const m = this.state.minutes <= 9? `0${this.state.minutes}`: this.state.minutes
    const s = this.state.seconds <= 9? `0${this.state.seconds}`: this.state.seconds
    const p = `${m}:${s}\n\n`
    this.setState({ 
      ...this.state,
      partial: this.state.partial + p
    })
  }
  
  pararTempo(){
    this.setState({ 
      ...this.state,
      stop: !this.state.stop,
      nameStop: this.state.stop? "Stop": "Start"
    })
  }

  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.seconds >= 59){
            this.Reset();
            this.incrementarMinuto(state);
          }  
          return({ seconds: Number(state.seconds) +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutes: Number(state.minutes) +1}
    })
  };
  
  Reset () {
    this.setState({ 
      seconds: 0 
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementar(), 1000)
  }
  

  render(){

    return (
      <div className='container'>
        
        <Stopwatch minutes={this.state.minutes} seconds={this.state.seconds} />
        <ClockLabel name={this.state.name} />
        <div className='botoes'>
          <Button onClick={() => this.ResetCronometro()} label={"Reset"} />
          <Button onClick={() => this.pararTempo()} label={this.state.nameStop} />
          <Button onClick={() => this.partial()} label={"Partial"} />
        </div>
        
        <h2>Partials:</h2>
        <ClockLabel className='parciais' name={this.state.partial} />
      </div>
    );
  }
}

export default App;