import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePerson } from '../actions/index';

class SelectPerson extends Component {
    show(event) {
        event.preventDefault();
        this.props.changePerson(event.target.value);
    }
    render() {
        return (
            <div className="col-md-2">
                <div className="select">
                    <select className="form-control" onChange={this.show.bind(this)}>
                        <option value="0">Zubair</option>
                        <option value="1">Zaeem</option>
                        <option value="2">Jawwad</option>
                        <option value="3">Muneeb</option>
                        <option value="4">Ahmed</option>
                        <option value="5">Fashi</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default connect(null, { changePerson })(SelectPerson);