import React from 'react';
import './App.css';

import DogImage from './DogImage';
import DogButton from './DogButton';
import DogAlbum from './DogAlbum';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      erro: null,
      isLoaded: false,
      message: "",
      dogsList: [],
    };

    this.fetchImages = this.fetchImages.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((prevState) => ({
            isLoaded: true,
            message: result.message,
          }));
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    this.fetchImages()
  }

  onClickButton() {
    this.setState(({ message, dogsList }) => ({
      dogsList: [ ...dogsList, message ],
      isLoaded: false,
      message: "",
    }));
    this.fetchImages();
  }

  render() {
    const { error, isLoaded, message, dogsList } = this.state;
    return (
      <div className="App">
        <DogImage
          error={ error }
          isLoaded={ isLoaded }
          message={ message }
        />
        <DogButton
          onClickButton={ this.onClickButton }
        />
        <DogAlbum
          dogsList={ dogsList }
        />
      </div>
    );
  }
}

export default App;
