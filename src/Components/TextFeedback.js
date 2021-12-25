import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


const TextFeedback = () => {
  const FEEDBACKS = [
    {
      comment : "I learnt a lot while working with sayan. He is a great team player. Quick learner and very flexible.",
      by : 'Thomas methew'
    },
    {
      comment : "This guy is very charming and accepts every challange. I learnt a lot while working with sayan. He is a great team player. Quick learner and very flexible.",
      by : 'Jason Oreva'
    },    
    {
      comment : "Helped my business to groww very fast. He is a good adviser. He has in depth knowledge of finance world. I have never seen such a brillent person.",
      by : 'Karan Malohatra'
    },    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    centerMode : true,
    arrows : false
  };

  const FeedbackCard = (props)=>{
    const {feedback} = props;
    return(
            <div className='text-feedback-card-outer-container'>
              <div className='text-feedback-card-container'>
                <div className='text-feedback-card-comment'>
                  {feedback.comment}
                </div>
                <div className='text-feedback-card-by'>
                  -By {feedback.by}
                </div>
              </div>
            </div>
    );
  }

    return (
        <div className='text-feedback-page-container'>
            <div className='text-feedback-slider-outer-container'>
              <div className='text-feedback-slider-container'>
                <Slider {...settings}>
                  {FEEDBACKS.map((feedback)=>{
                    return(
                      <FeedbackCard feedback={feedback}/>
                    );
                  })}                  
                </Slider>
              </div>
            </div>
            
        </div>
    )
}

export default TextFeedback;
