import React from 'react';

class DogAlbum extends React.Component {
  render() {
    const { dogsList } = this.props;
    return (
      <div>
        {dogsList.map((dog, index) => {
          return <img src={dog} alt={dog} key={index} />
        })}
      </div>
    );
  }
}

export default DogAlbum;
