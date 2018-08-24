import React, { Component } from 'react';
import { connect } from 'react-redux';

class Logo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-1">
                    <div id="logo">
                        {this.props.state.logo}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        state: state.selectedPerson
    }
}
export default connect(mapStateToProps)(Logo);