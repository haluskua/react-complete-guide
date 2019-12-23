import React, {Component} from "react";

// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

// the otherway of using HOC

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };


// Does not have to be a functional compoenent
// When fetching API to confirm user ID etc you will use a stateful Component

const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
        <WrappedComponent {...this.props} />
      </div>
      )
    }

  }
};

export default withClass;
