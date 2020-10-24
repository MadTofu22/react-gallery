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
            <section className='galleryItem' key={this.props.item.id} >
                {this.state.imgShowing ?
                <img src={this.makePath()} alt={this.props.item.description} onClick={this.updateImgVisbility}/>
                :
                <p className="imgDescription" onClick={this.updateImgVisbility}>{this.props.item.description}</p>
                }
                <button onClick={() => {this.props.likeImage(this.props.item.id)}}>Like</button>
            </section>
        );
    }
}

export default GalleryItem;