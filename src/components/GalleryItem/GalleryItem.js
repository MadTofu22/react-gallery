import React, { Component } from 'react';

class GalleryItem extends Component {

    makePath = () => {
        return ('../../' + this.props.item.path)
    }

    render () {
        return (
            <section className='galleryItem' key={this.props.item.id}>
                <img src={this.makePath()} alt={this.props.item.description}/>
                <br />
                <button onClick={() => {this.props.likeImage(this.props.item.id)}}>Like</button>
            </section>
        );
    }
}

export default GalleryItem;