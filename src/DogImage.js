import React from 'react';

class DogImage extends React.Component {
  

  render() {
    const { error, isLoaded, message } = this.props;
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <img src={message} alt="fotos aleatorias de cachorros" />
        </div>
      )
    }
  }
}

export default DogImage;
