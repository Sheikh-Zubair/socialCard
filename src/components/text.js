import React, { Component } from 'react';
import { connect } from 'react-redux';


class Text extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12" id="text">
                    <h1>{this.props.state.fname}</h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        state: state.selectedPerson
    }
}
export default connect(mapStateToProps)(Text);