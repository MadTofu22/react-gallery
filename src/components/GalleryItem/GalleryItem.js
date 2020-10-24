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
                <p className="likesDisplay">{this.displayLikes(Number(this.props.item.likes))}</p>
            </section>
        );
    }
}

export default GalleryItem;