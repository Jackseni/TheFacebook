import React from 'react';
import PropTypes from 'prop-types';
import './Heart.css';

const Heart = ({clickHeart}) => {
    const handleClick =() =>{
        clickHeart()
    }
    return(
        <div className = 'HeartContainer'>
            <div className = 'glyphicon glyphicon-heart' onClick = {() => handleClick()}>   </div>
        </div>
    )
}

Heart.propTypes = {
    clickHeart:PropTypes.func.isRequired,
}

export default Heart;