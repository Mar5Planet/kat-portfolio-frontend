import React, { useState, useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const ContentContainer = (props) => {
    const [contentId] = useState(props.content.match.params.id)
    const [foundContent, setFoundContent] = useState('')
    const [images, setImages] = useState([])

    const findContent = (contentId) => {
        setFoundContent(props.allContent.find(content => content.id === parseInt(contentId)))
        setImages(props.images.filter(img => img.content_id === parseInt(contentId)))
    }

    useEffect(() => {
        findContent(contentId)
    }, [contentId])

    return (
        <>
            <ImageCarousel images={images} />
            <h1>
                {foundContent.title}
            </h1>
            <p>
                {foundContent.desc} 
            </p>
            {console.log(images, foundContent)}
        </>

    )
}

export default ContentContainer;