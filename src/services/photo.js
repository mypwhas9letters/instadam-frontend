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