import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
          FRCCoding
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link to="/assignments" className="hover:text-blue-300 transition-colors">
            Assignments
          </Link>
          <Link to="/videos" className="hover:text-blue-300 transition-colors">
            Videos
          </Link>
        </div>
        <button className="md:hidden bg-blue-600 hover:bg-blue-700 p-2 rounded">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}