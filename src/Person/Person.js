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

const person = () => {
    return <p>I'm a Person! and I am {Math.floor(Math.random()*30)} years olds! </p>
}


export default person;