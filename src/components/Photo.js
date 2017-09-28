import React from 'react'

const Photo = (props) => {
  const comments = props.photo.comments.map(comment => <p>{comment.content}</p>)
  const username = props.photo.user.username
  return (
      <div className="card">
        <div className="image">
          <h2>{username}</h2>
          <img onClick={props.onClick} src={props.photo.url}/>
        </div>
        <div className="extra content">


            <div className="ui labeled button" tabindex="0">
              <div className="ui basic red button">
                 <i className="frown icon"></i>
              </div>
                <a className="ui basic red left pointing label">
                  823
                </a>
              </div>

              <div className="ui labeled button" tabindex="0">
                <div className="ui basic red button">
                  <i className="thumbs outline down icon"></i>
                </div>
                  <a className="ui basic left pointing red label">
                    120
                  </a>
                </div>


           </div>
        <div className="content">
         <h3 onClick={props.onClick} className="header">{comments}</h3>
       </div>
     </div>
  )
}

export default Photo
