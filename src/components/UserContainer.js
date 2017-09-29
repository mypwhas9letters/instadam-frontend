import React from 'react'
import Photo from './Photo.js'

class UserContainer extends React.Component {

  render() {
    console.log(this.props.user)

    const userId = this.props.user.id
    const filteredPhotos = this.props.photos.filter(photo => photo.user_id === userId)
    return (
      <div className="ui container">
        <div className="ui link cards">
        {filteredPhotos.map((photo, index) => <Photo key={index} photo={photo} onClick={this.props.onClick} />)}
    </div>
  </div>
    )
  }
}

export default UserContainer
