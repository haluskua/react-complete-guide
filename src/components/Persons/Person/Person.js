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
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
    // not related to React App so not the optimal way so use id
    // document.querySelector("input").focus();
    // this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] rendering ...");

    return (
      <Auxiliary>
        <p key="i1" onClick={this.props.click}>
          I am {this.props.name} and I am {this.props.age} years olds!{" "}
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
  // return [
  //   <p key="i1" onClick={this.rops.click}>
  //     I am {this.props.name} and I am {this.props.age} years olds!{" "}
  //   </p>,
  //   <p key="i2">{this.props.children}</p>,
  //   <input
  //     key="i3"
  //     type="text"]
  //     onChange={this.props.changed}
  //     value={this.props.name}
  //   />
  // ];
  // return (
  //   <Auxiliary>
  //     <p key="i1" onClick={this.props.click}>
  //       I am {this.props.name} and I am {this.props.age} years olds!{" "}
  //     </p>
  //     <p key="i2">{this.props.children}</p>
  //     <input
  //       key="i3"
  //       type="text"
  //       onChange={this.props.changed}
  //       value={this.props.name}
  //     />
  //   </Auxiliary>
  // );
}
//when distribution to other developers or when working in large group or projects
Person.proptTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
