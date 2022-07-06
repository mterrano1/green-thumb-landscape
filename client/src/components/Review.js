import React from 'react';

const Review = ({ review }) => {

    const likeDislike = review.like === 1 ? 
        <img src={'https://hotidioms.files.wordpress.com/2018/01/green-thumb.png'} width={40} height={40} alt='Green Thumb'/> :
        <img src={'https://i.pinimg.com/originals/72/1b/52/721b52c61f5781c740432f64b77f9ca6.png'} width={40} height={40} alt='Black Thumb'/>


    return (
        <li className='reviewCard'>
            <hr/>
            <span>{likeDislike}{review.comment}</span>
        </li>
    );
}

export default Review;