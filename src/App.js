import React from"react";
import './index.css';

export default class APP extends React.Component{
  constructor()
{
  super();
  this.state={count : 0};
}
render(){

  
  const Increment=()=>{
    this.setState((prevState)=>({count : prevState.count + 1}));
  };
  const Decrement=()=>{
    this.setState((prevState)=>({count : prevState.count - 1}));
  };
  const rese=()=>{
    this.setState((prevState)=>({count: 0}));
  }

  return(
    <div>
      <center>
    <h1> counter</h1>
    </center>

    <div><span className="sub"> {this.state.count} </span></div>


  <div className="App">


    <button onClick={Increment}>Increment+</button>
    <button onClick={rese}>reset</button>

    <button onClick={Decrement}>Decrement-</button>

  </div>
  </div>
  );


}
}