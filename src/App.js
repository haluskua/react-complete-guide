import React, { Component } from "react";
import "./App.css";
import "./Person/Person";
import Person from "./Person/Person";
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
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      width: "200px",
      border: "1px solid yellowgreen",
      padding: "8px",
      cursor: "pointer"
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style.border = '1px solid black';
    }
    // let classes = ['red', "bold"].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red') //  classses = ['red']
    }
    if (this.state.persons.length <= 1){
      classes.push('bold') // classes = ['red, 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I am a new React App</h1>
        <p className={classes.join (' ')}>This is really working</p>
        <button style={style} 
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
