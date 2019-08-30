import React from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

const Comments = ({ comments , addComments, changeText , valueText }) => {
    const handleChange = (event) => {
        changeText (event.target.value)
    }


    const handleClick = ()=>{
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


    return(
        <div className='CommentsContainerBox'>
            <div className='CommentsContainer'>
                <input
                onChange={(e)=> handleChange(e)}
                className = 'CommentsBox'
                type = 'text' placeholder='Escriba un comentario'
                value={valueText}
                ></input>
                <button className='CommentButton' onClick={() => handleClick()}></button>
            </div>
            {CommentList}
        </div>
    )

}

Comment.defaultProps={
    valueInput:''

}

Comments.propTypes={
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
    changeText: PropTypes.func.isRequired
}


export default Comments;