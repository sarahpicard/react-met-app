import { useEffect, useState } from "react"
import { getArtList } from "../../services/api-calls"
import { Link } from "react-router-dom"

const ArtList = () => {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    getArtList()
    .then(artData => setArtList(artData.objectIDs))
  })
  return (
    <div>
      <h1>List of All Art at the MET!</h1>
      {artList.map((artData) => (
        <Link key={artData.index} state={{ artData}} to ='/art'>
          <div key={artData.index}>
            {artData.title}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArtList