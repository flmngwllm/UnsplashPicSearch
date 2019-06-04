import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    //mapping images with a key property
    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>
    })


    return(
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList;


