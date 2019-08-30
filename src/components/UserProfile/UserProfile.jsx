import React from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';

const UserProfile = ({img, Name, Likes, Comments}) => {
    const ImageStyle = {
        backgroundImage: `url(${img})`     
    }
   return(
       <div className='UserProfileContainer'>    
        <div className= 'ImageContainer'>
            <div className= 'Img' style={ImageStyle}></div>
        </div>
        <div className='InfoContainer'>
            <div className='Name'>{Name}</div>
            <div className='LikesNumber'>Likes:{Likes}</div>
            <div className='CommentsNumber'>Comments:{Comments}</div>
         </div>
       </div>
   )
}

UserProfile.propTypes={
    img: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Likes: PropTypes.number.isRequired,
    Comments: PropTypes.number.isRequired
}


export default UserProfile;