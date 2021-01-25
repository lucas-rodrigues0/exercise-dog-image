import React from 'react';
import './DogAlbum.css';

class DogAlbum extends React.Component {
  render() {
    const { dogsList } = this.props;
    return (
      <div className="album-container">
        <div className="dogs-album">
          {dogsList.map((dog, index) => {
            return <img src={dog} alt={dog} key={index} />
          })}
        </div>
      </div>
    );
  }
}

export default DogAlbum;
