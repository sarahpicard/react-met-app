import { FaHandPointRight } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="text-3xl w-screen bg-teal-900 h-20 shadow-md px-10">
      <div className="pt-5 text-white">
        <a 
          className="px-20 hover:text-red-200" 
          href="/art"
          >
          <FaHandPointRight className='inline mr-3 mb-2'/>
          Random Art
        </a>
        <a 
          className="px-10 hover:text-red-200" 
          href="/artists"
          >Artists
        </a>
      </div>
    </div>
  )
}

export default Nav