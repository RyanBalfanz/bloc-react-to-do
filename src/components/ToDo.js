import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>{ this.props.description }</li>
        );
      }
}

export default ToDo;