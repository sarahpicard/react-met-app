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
        <div className="container mx-auto lg:w-1/3 sm:w-1/2 w-3/4 flexbox my-16 bg-rose-50 px-6 py-6 rounded-lg shadow-lg">
          <a href={oneArt.objectURL} target="_blank" rel="noreferrer noopener">
          <h1 className="text-3xl font-medium mb-2">{oneArt.title}</h1>
            {oneArt.artistDisplayName === '' ?
              <p> 
                <span className="font-medium">No artist available 😢 </span>
              </p>
            :
              <p>
                <span className="font-medium">Artist: </span> 
                {oneArt.artistDisplayName}
              </p>
            }
            {oneArt.objectDate === '' ?
              <p>
                <span className="font-medium">No art date available 😪 </span>
              </p>
            :
              <p>
                <span className="font-medium">Art Date: </span> 
                {oneArt.objectDate}
              </p>
            }
            {oneArt.culture === '' ?
              <p>
                <span className="font-medium">No art culture available 🤷🏼‍♀️ </span>
              </p>  
            :
              <p>
                <span className="font-medium">Art Culture: </span>
                {oneArt.culture}
              </p>
            }
            {oneArt.repository === '' ?
              <p>
                <span className="font-medium">No art repository available 😿 </span>
              </p>  
            :
              <p>
                <span className="font-medium">Art repository: </span>
                {oneArt.repository}
              </p>
            }
            {oneArt.primaryImage === '' ?
              <p>
                <span className="font-medium">No image available 😳 </span>
              </p>
            :
              <img className="mx-auto mb-3 mt-7" src={oneArt.primaryImage} alt="art" style={{height: '320px', width: '300px'}}/>
            }
          </a>
        </div>
    </div>
  )
}

export default ArtList