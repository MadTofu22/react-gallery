import React, { Component } from 'react';

class GalleryItem extends Component {

    state = {
        imgShowing: true
    }

    makePath = () => {
        return ('../../' + this.props.item.path)
    }

    updateImgVisbility = () => {
        this.setState({
            imgShowing: !this.state.imgShowing
        });
    }

    render () {
        return (
            <section className='galleryItem' key={this.props.item.id} onClick={this.updateImgVisbility}>
                {this.state.imgShowing ?
                <img src={this.makePath()} alt={this.props.item.description}/>
                :
                <p>{this.props.item.description}</p>
                }
                <br />
                <button onClick={() => {this.props.likeImage(this.props.item.id)}}>Like</button>
            </section>
        );
    }
}

export default GalleryItem;