export function uploadPhoto(pictureParams) {
  const body = JSON.stringify(pictureParams)
  return fetch("http://localhost:3000/photoupload", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())

}

export function addNewComment(commentParams) {
  const body = JSON.stringify(commentParams)
  return fetch("http://localhost:3000/newcomment", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())

}
