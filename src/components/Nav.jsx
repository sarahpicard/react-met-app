import { FaHandPointRight } from 'react-icons/fa'

const Nav = () => {
  return (
    <div className="text-4xl w-screen bg-teal-900 h-28 shadow-md">
      <div className="pt-8 text-white">
        <a 
          className="mx-20 px-10 text-black hover:text-rose-900 bg-rose-50 rounded-xl" 
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