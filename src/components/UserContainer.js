import React from 'react'
import Photo from './Photo.js'
import { uploadPhoto } from '../services/photo.js'

class UserContainer extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    url: ''
  }
}

changeURL = (event) => {
  this.setState({
    url: event.target.value
  })
}

  handleUpload = (event) => {
    event.preventDefault()
    const pictureParams = { url: event.target.firstElementChild.value, user_id: localStorage.getItem('user_id')}
    this.props.onUpload(pictureParams)
    this.setState({
      url: ''
    })
  }


  render() {

    console.log(this.props)
    const userId = this.props.user.id
    const filteredPhotos = this.props.photos.filter(photo => photo.user_id === userId)
    return (
      <div className="ui container">
        <h3>Upload Photo</h3>
        <form onSubmit={this.handleUpload}>
        URL: <input onChange={this.changeURL} type="text" value={this.state.url}/>
        <input type="submit" value="Upload Photo"/>
        </form><br/>
        <div className="ui link cards">
        {filteredPhotos.map((photo, index) => <Photo key={index} photo={photo} onClick={this.props.onClick} />)}
    </div>
  </div>
    )
  }
}

export default UserContainer
