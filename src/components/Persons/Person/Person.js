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
import classes from './Person.css'

const person = ( props ) => {
    console.log('[Person.js] rendering ...')
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years olds! </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>

    )
}


export default person;