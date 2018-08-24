import React, { Component } from 'react';

export default class RectPic extends Component {
    render () {
        return (
            <div id="pic">
                <img src={this.props.pic} alt={this.props.name} width="40" height="40"/>
            </div>
        );
    }
}

