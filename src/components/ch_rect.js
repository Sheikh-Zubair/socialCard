import React, { Component } from 'react';
import RectPic from './ch_rect_pic';
import { connect } from 'react-redux';

class Rect extends Component {
    render() {
        return (

            <div className="row" id="rect">
                <div className="col-xs-2 col-xs-push-9" id="name">
                    <h4>{this.props.state.name}</h4>
                </div>
                <div className="col-xs-1 col-xs-push-9" id="pic-col">
                    <RectPic pic={this.props.state.pic} name={this.props.state.name} />
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
export default connect(mapStateToProps)(Rect);