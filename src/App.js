import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component {
//   state = {
//     persons: [
//       {
//         name: 'Max', age: 28
//       },
//       {
//         name: 'Manu', age: 29
//       },
//       {
//         name: 'Stephanie', age: 26
//       }
//     ],
//   othersState: 'some other value'

//   }

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 20 }
    ],
  });

 const [otherState, setOtherState] = useState('some other state')

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 23 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState
    });
  };
  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement("div", null, "h1", "Hi, I'm a React!!");
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", { className: "App" }, "does this work now?")
  // );
};

export default app;
