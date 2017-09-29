import React from 'react'

class Photo extends React.Component {

  findCommentsAndUsers = () => {
    let loop = []
    for (let i = 0; i < this.props.photo.comments.length; i++) {
      loop.push(`${this.props.photo.users[i].username}:  ${this.props.photo.comments[i].content}`)
    }
    return loop
  }

  render() {
      let comments = this.findCommentsAndUsers()
  return (
      <div className="card">
        <div className="image">
          <h2>{this.props.photo.user.username}</h2>
          <img onClick={this.props.onClick} src={this.props.photo.url} alt=""/>
        </div>
        <div className="extra content ">

        <div className="ui two buttons">
            <div className="ui labeled button">
              <div className="ui basic red button">
                 <i className="frown icon"></i>
              </div>
                <a className="ui red left pointing label">
                  823
                </a>
              </div>

              <div className="ui labeled button">
                <div className="ui basic red button">
                  <i className="thumbs outline down icon"></i>
                </div>
                  <a className="ui  left pointing red label">
                    1200
                  </a>
                </div>
                </div>


           </div>
        <div className="content">
        {comments.map((comment, index) =>
         <div key={index} onClick={this.props.onClick} className="description">{comment}</div>
         )}
       </div>
       <div className="extra content">
        <div className="ui large transparent left icon input">
          <i className="thumbs outline down icon"></i>
          <input type="text" placeholder="Add Comment..."/>
        </div>
      </div>
     </div>
   )
  }
}

export default Photo
