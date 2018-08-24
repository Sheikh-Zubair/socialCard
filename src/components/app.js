import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardHeader from './card_header';
import SelectPerson from './select_person';
import { defaultPerson } from '../actions/index';

class App extends Component {

  componentWillMount() {
    this.props.defaultPerson();
  }

  render() {
    return (
      <div className="container-fluid" id="card">
        <div>
          <CardHeader />
          <SelectPerson />
        </div>
      </div>
    );
  }
}

export default connect(null, { defaultPerson })(App);
