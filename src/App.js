import React from "react";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Islogged :true
    }
    this.handelChange = this.handelChange.bind(this)
  }
  handelChange () {
    
    console.log(this.state.Islogged)
    this.setState(prevState => {
      return {
        Islogged : !prevState.Islogged
      }
    })
  }
  render() {
    let buttontext  = this.state.Islogged ? 'Log Out' : 'Log In'
    return (
      <div className="App">
        <h1>Connection</h1>
        <h2>{this.state.Islogged ? 'Welcome' : 'you are not loged'}</h2>
       
        <button onClick={this.handelChange}>{buttontext}</button>
       
      </div>
    );
  }
  
}

export default App 