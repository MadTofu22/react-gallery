import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state={
    gallery: []
  }

  componentDidMount = () => {
    console.log('app.js loaded');
    this.getGallery();
  }

  getGallery = () => {
    axios({
      methos: 'GET',
      url: '/gallery'
    }).then(response => {
      console.log(response.data);
      this.setState({
        gallery: response.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  likeImage = (id) => {
    console.log('lime image has been clicked, id:', id);
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList list={this.state.gallery} likeImage={this.likeImage}/>
      </div>
    );
  }
}

export default App;
