import React from 'react'

class Photo extends React.Component {

  findCommentsAndUsers = () => {
    let listOfComments = []
    for (let i = 0; i < this.props.photo.comments.length; i++) {
      listOfComments.push(`${this.props.photo.users[i].username}:  ${this.props.photo.comments[i].content}`)
    }
    return listOfComments
  }

  addComment = (event) => {
    event.preventDefault()
    console.log(localStorage.getItem('user_id'))
    console.log(event.target.firstElementChild.value)
    console.log(this.props.photo.id)
  }

  render() {
    let comments = this.findCommentsAndUsers()
    return (
      <div className="card">
        <div className="content">
          <h2>{this.props.photo.user.username}</h2>
        </div>
        <a className="image">
          <img onClick={this.props.onClick} src={this.props.photo.url} alt=""/>
        </a>
        <div className="extra content ">
          <span className="right floated">
            <i className="thumbs down outline like icon"></i>
            1200
          </span>
          <i className="comment icon"></i>
            {comments.length} comments
        </div>
        <div className="content">
          {comments.map((comment, index) =>
            <div key={index} onClick={this.props.onClick} className="description">{comment}</div>
          )}
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="thumbs outline down icon"></i>
            <form onSubmit={this.addComment}>
            <input type="text" placeholder="Add Comment..."/>
            <input type="submit" value="Add Comment"/>
            </form>
          </div>
        </div>
      </div>
   )
  }
}

export default Photo
