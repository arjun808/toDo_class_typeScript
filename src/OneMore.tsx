import React, { Component } from 'react'


interface AppState{
    istrue:boolean
}
export default class OneMore extends Component<{},AppState> {
    constructor(props:{}){
        super(props)
     this.state={
       istrue:false,
     }


    }
  
    handleClick = () => {
      // this.setState((prevState: AppState) => ({ 
      //   istrue: !prevState.istrue 
      // }));
      this.setState({istrue:!this.state.istrue})
    }
    
  render() {
    const {istrue}=this.state
    console.log(istrue)
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <h1>{istrue?"true":"false"}</h1>
      </div>
    )
  }
}
