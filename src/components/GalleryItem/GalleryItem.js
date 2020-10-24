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

    displayLikes(numOfLikes) {
        console.log('in displayLikes', numOfLikes);
        return (
            numOfLikes === 0 ? 
            <p className="likesDisplay">No likes yet.</p>
            :
            <p className="likesDisplay">{numOfLikes} likes for this image.</p>
        );
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
                {this.displayLikes(Number(this.props.item.likes))}
            </section>
        );
    }
}

export default GalleryItem;