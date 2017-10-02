import React from 'react'
import PhotoList from './PhotoList.js'

const PhotoContainer = (props) => {
  return (
    <div>
      <PhotoList photos={props.photos} onClick={props.onClick} />
    </div>
  )
}

export default PhotoContainer
