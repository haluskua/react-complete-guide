import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from '../components/Cockpit/Cockpit';
import "../components/Persons/Person/Person";
// import Person from "../components/Persons/Person/Person";
import Persons from "../components/Persons/Persons"
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

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler} 
                  changed={this.nameChangeHandler} 
                  />     
    }

    return (
      <React.Fragment>
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />;
          {persons}
        </div>
      </React.Fragment>
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
