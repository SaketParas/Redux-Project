import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
        <h1>App component</h1>
        {/* <h2>my name is{props.myname}</h2> */}
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{
    myname:state.name
  }
}

export default connect(mapStateToProps)(App);
