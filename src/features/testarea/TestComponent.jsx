import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testAction";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data } = this.props;
    return (
      <Fragment>
        <div> Test </div>
        <h1>{data}</h1>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <br/>
        <br/>
        <br/>
        <TestPlaceInput/>
      </Fragment>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
