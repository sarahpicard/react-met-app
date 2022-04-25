import { useEffect, useState } from "react"
import { getOne } from "../../services/api-calls"
const ArtList = () => {
  const [oneArt, setOneArt] = useState({})

  useEffect(() => {
    getOne()
    .then(art => setOneArt(art))
  }, [])


  return (
    <div className="w-screen">
      <a href={oneArt.objectURL} target="_blank" rel="noreferrer noopener">
        <div className="container mx-auto w-1/3 flexbox my-20 bg-rose-50 px-6 py-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-medium mb-2">{oneArt.title}</h1>
          <p>
            <span className="font-medium">Artist: </span> 
            {oneArt.artistDisplayName}
          </p>
          <p>
            <span className="font-medium">Art Date: </span> 
            {oneArt.objectDate}
          </p>
          <p>
            <span className="font-medium">Art Culture: </span>
            {oneArt.culture}
          </p>
          <p>
            <span className="font-medium">Art repository: </span>
            {oneArt.repository}
          </p>
          <img className="mx-auto mb-3 mt-7" src={oneArt.primaryImage} alt="art" style={{height: '320px', width: '300px'}}/>
        </div>
      </a>
    </div>
  )
}

export default ArtList