import { FaHandPointRight } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="sm:text-4xl text-xl w-screen bg-teal-900 h-28 shadow-md">
      <div className="pt-8 text-white">
        <a 
          className="sm:mx-20 mx-10 sm:px-10 px-9 text-black hover:text-rose-900 bg-rose-50 rounded-xl" 
          href="/art"
          >
          <FaHandPointRight className='inline mr-3 mb-2 h-8' />
          Random Art
        </a>
      </div>
    </div>
  )
}

export default Nav