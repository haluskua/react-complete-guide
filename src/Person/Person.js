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
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            backgroundColor: 'orange'
        }
    }
    return (
    <div className="Person" style={style}>
        <p onClick={props.click}>I am {props.name} and I am {props.age} years olds! </p>
        <p>{props.children}</p><br />
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>

    )
    }


export default Radium(person);