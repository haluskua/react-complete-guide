import React, { PureComponent } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Auxiliary from "../hoc/Auxiliary";

// eslint-disable-next-line
// import { join } from "path";
// import withClass from "../hoc/WithClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }

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
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
    toggleClicked: 0
  };

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // LEGACY UPDATE CYCLE
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // might have cases not update certain component by returning false
  //   // return nextProps.persons !== this.props.persons;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE.App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE.App.js] Inside componenentDidUpdate');
  }



  // HandlerFunctions

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

    // this.setState({ persons: persons });
    // Best practice for state updates that depend on the old/prev state

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1 
      }
      
    });
  };

  render() {
    console.log("[App.js] Inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />;

    }
    return (
      <Auxiliary>
        <button onClick={() => { this.setState({ showPersons: true }) }}> SHOW PERSONS</button>
        <Cockpit
          showPersons={this.state.showPersons}
          appTitle={this.props.title}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Auxiliary>
    );
    // return React.createElement("div", null, "h1", "Hi, I'm a React!!");
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "does this work now?")
    // );
  }
}

export default withClass(App, classes.App);
