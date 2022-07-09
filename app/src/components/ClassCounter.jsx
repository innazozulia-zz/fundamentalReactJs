import React, { Fragment } from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrememt = this.decrememt.bind(this);
  }

  increment() {
    this.setState({ count: (this.state.count += 1) });
  }

  decrememt() {
    this.setState({ count: (this.state.count -= 1) });
  }

  render() {
    return (
      <Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrememt}>-</button>
      </Fragment>
    );
  }
}

export default ClassCounter;
