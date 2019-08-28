import React from 'react';
import ProType from 'pro-types';
import './Comments.css';
import { className } from 'postcss-selector-parser';

const Comments = ({ comments , addComments, changeText , valueText }) => {
    const handleChange = (event) => {
        changeText (event.target.value)
    }


    const hadleClick = ()=>{
        addComments(valueText)
    }

    const CommentList = comments.map((element, index) => {
        return(
            <div className = 'Comments' key={ index}>
                <div className = 'User'></div>
                <spam className = 'Text'>{element.value}</spam>
            </div>
        )
    });



}
