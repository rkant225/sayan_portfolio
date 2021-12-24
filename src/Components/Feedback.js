import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';



const Feedback = () => {
    const images = [
        {
          original: 'https://i.imgur.com/DyxCOh5.jpeg',
          originalHeight : 400,
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          originalHeight : 400,
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          originalHeight : 400,
        },
      ];

    return (
        <div className='feedback-page-container'>

            <div className="feedback-section-header">Feedback</div>

            <div className='feedback-image-gallery-container'>
                <div className='feedback-image-gallery'>
                    <ImageGallery items={images} autoPlay={true} />
                </div>
            </div>
        </div>
    )
}

export default Feedback;
