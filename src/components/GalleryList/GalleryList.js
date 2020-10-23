import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render () {
        return (
            <section className='galleryDisplay'>
                {this.props.list.map(item => {
                    return (
                        <GalleryItem item={item} key={item.id} likeImage={this.props.likeImage} />
                    );
                })}
            </section>
        );
    }
}

export default GalleryList;