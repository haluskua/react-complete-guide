// in its simplest form a component is just a function that returns some jsx code

// function person() {
//     return <h2></h2>
// }

// var person = function () {

// }

// But we want to use ES6

// const person = function(){

// }

import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../containers/hoc/Auxilary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years olds!{" "}
        </p>
        ,<p key="i2">{this.props.children}</p>,
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
