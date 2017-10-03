import React from 'react'
import PhotoList from './PhotoList.js'

const PhotoContainer = (props) => {
  return (
    <div>
      <PhotoList photos={props.photos} onClick={props.onClick} onUpload={props.onUpload}/>
    </div>
  )
}

export default PhotoContainer
