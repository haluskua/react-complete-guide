// in its simplest form a component is just a function that returns some jsx code

// function person() {
//     return <h2></h2>
// }

// var person = function () {

// }

// But we want to use ES6

// const person = function(){

// }

import React from 'react';

const person = (props) => {
    return <p>I am {props.name} and I am {props.age} years olds! </p>
}


export default person;