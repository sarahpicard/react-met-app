import { useEffect, useState } from "react"
import { getArtList, getOne } from "../../services/api-calls"
import { Link } from "react-router-dom"
import { random } from "animejs"

const ArtList = () => {
  const [oneArt, setOneArt] = useState({})

  useEffect(() => {
    getOne()
    .then(art => setOneArt(art))
  }, [])


  return (
    <div>
      <div>
        <h1>{oneArt.title}</h1>
        <p>Artist: {oneArt.artistDisplayName}</p>
        <p>Art Date: {oneArt.objectDate}</p>
        <p>Art Culture: {oneArt.culture}</p>
        <p>Art repository: {oneArt.repository}</p>
        <img src={oneArt.primaryImage} alt="art" style={{height: '300px', width: '300px'}}/>
        <button>
          <a href={oneArt.objectURL}>See Art</a>
        </button>
      </div>
    </div>
  )
}

export default ArtList