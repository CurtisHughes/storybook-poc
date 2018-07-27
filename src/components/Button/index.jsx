import * as React from 'react';
import './Button.scss';

class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick}>
          {this.props.children}
        </button>
      );
    }
  }

export default Button;