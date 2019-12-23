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
import withClass from "../../../hoc/WithClass";
import Auxiliary from "../../../hoc/Auxiliary";
import PropTypes from 'prop-types';


class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }

  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <Auxiliary>
        <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} year old!</p>
        <p> {this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);