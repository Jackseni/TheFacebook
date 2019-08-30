import React,  {Component} from 'react';
import UserProfile from './components/UserProfile/UserProfile';
import Heart from './components/Heart/Heart';
import Comments from './components/Comments/Comments'
import './App.css';

class App extends Component{

  state ={
    LikesNumber: 0,
    CommentsNumber: 1,
    Comments:[{
      value: '¡¡¡ React Es Otro Rollo !!!'
    }]
  }


clickHeart = () => {
  const like = this.state.LikesNumber
  this.setState({ LikesNumber: like +1})
}

addComment = (newValue) => {
  const comments = this.state.CommentsNumber
  const arrayComments = this.state.Comments
  const newComment ={
    value: newValue
  }

  arrayComments.push(newComment)
  this.setState({ CommentsNumber: comments + 1})
  this.setState({ Comments: arrayComments })
  this.setState({ ValueText: '' })

  }


  changeText = (value)=> {
    this.setState({ ValueText: value})
  }


  render(){
    return ( <div className = "Container" >
      <UserProfile img = 'https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
        Name = 'JACKSENI'
        Likes = { this.state.LikesNumber}
        Comments = { this.state.CommentsNumber}/>
        <Heart clickHeart = { this.clickHeart } />
        <Comments comments = { this.state.Comments }
        addComment = { this.addComment }
        changeText = { this.changeText }
        ValueText = { this.ValueText } />
    </div>
    );
  }
}


export default App;
