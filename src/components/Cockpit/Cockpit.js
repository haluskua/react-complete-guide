import React from 'react';
import classes from './Cockpit.css';
import Auxiliary from '../../hoc/Auxiliary';


const cockpit = (props) => {
  // let classes = ['red', "bold"].join(' ');
  const assignedClasses = [];
  let btnClass = classes.Button;


  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red) //  classses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold) // classes = ['red, 'bold']
  }
  return (
    <Auxiliary>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>

      <button className={btnClass}
        onClick={props.clicked}>
        Toggle Person{" "}
      </button>
      <button onClick={props.login}> Log in</button>
    </Auxiliary> 
  );
};

export default cockpit;
