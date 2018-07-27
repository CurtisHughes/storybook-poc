import * as React from 'react';
import './Button.scss';

interface Props {
  onClick: () => void;
}

class Button extends React.Component<Props> {  
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;