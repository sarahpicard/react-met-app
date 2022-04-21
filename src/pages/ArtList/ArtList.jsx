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
      <h1>Random Art Piece!</h1>
      <div>
        <p>{oneArt.title}</p>
        <button>
          <a href={oneArt.objectURL}>See Art</a>
        </button>
      </div>
    </div>
  )
}

export default ArtList