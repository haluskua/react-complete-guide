import React, { Component } from "react";
import classes from "./App.css";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import "./Person/Person";
import Person from "./Person/Person";
// eslint-disable-next-line
import { join } from "path";

class App extends Component {
  state = {
    persons: [
      {
        id: "bnvbn",
        name: "Max",
        age: 28
      },
      {
        id: "xcvxc",
        name: "Manu",
        age: 29
      },
      {
        id: "wlkdd",
        name: "Stephanie",
        age: 26
      }
    ],
    othersState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <React.Fragment>
          <div className={classes.column}>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                  <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangeHandler(event, person.id)}
                />
                </ErrorBoundary>
            } )}
          </div>
        </React.Fragment>

      );
      //created by Cssloader
      btnClass = classes.Red;

    }
    // let classes = ['red', "bold"].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red) //  classses = ['red']
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold) // classes = ['red, 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a new React App</h1>
        <p className={assignedClasses.join (' ')}>This is really working</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>
          Toggle Person{" "}
        </button>
        {persons}
      </div>
  );
    // return React.createElement("div", null, "h1", "Hi, I'm a React!!");
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "does this work now?")
    // );
  }
}

export default App;
