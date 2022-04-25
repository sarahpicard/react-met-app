const Nav = () => {
  return (
    <div className="text-3xl w-screen bg-red-900 h-20">
      <div className="pt-5 text-white">
        <a className="px-10  hover:text-red-200" href="/art">Art</a>
        <a className="hover:text-red-200" href="/artists">Artists</a>
      </div>
    </div>
  )
}

export default Nav