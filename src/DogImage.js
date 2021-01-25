import React from 'react';
import './DogImage.css';

class DogImage extends React.Component {
  

  render() {
    const { error, isLoaded, message } = this.props;
    if(error) {
      return <div className="message">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="message">Loading...</div>;
    } else {
      return (
        <div className="image-container">
          <div className="dog-image">
            <img src={message} alt="fotos aleatorias de cachorros" />
          </div>
        </div>
      )
    }
  }
}

export default DogImage;
