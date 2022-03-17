const baseUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?'

export function getArtList() {
  return fetch(`${searchUrl}hasImages=true&q=hasImages=true`)
  .then(res => res.json())
}