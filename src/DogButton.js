import React from 'react';
import './DogButton.css';

class DogButton extends React.Component {
  render() {
    const { onClickButton } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClickButton }
        >
          New Dog
        </button>
      </div>
    );
  }
}

export default DogButton;
