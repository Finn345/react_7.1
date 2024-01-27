import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useAuth0 } from '@auth0/auth0-react'

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const signOutOnClick = () => {
    logout();
  }

  const signInOnClick = () => {
    loginWithRedirect();
  }

  const dropDownBar = () =>{
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return(
    <nav className='flex items-center justify-between flex-wrap bg-blue-500 p-4'>
      <div className='flex items-center flex-shrink-0 text-grey mr-5'>
        <Link to='/' className='font-bold text-xl tracking-tight text-white'>Check Out Cars!</Link>
      </div>
      <div className="block">
        <button onClick={dropDownBar}
          className='flex items-center px-4 py-1 
          text-gray-600 item-center rounded border 
          hover:text-red-600'>
          <i className="fa-solid fa-bars"></i>
          </button>
      </div>
      { isVisible ?(
      <div className="w-full block flex-grow items-start rounded-xl">
        <div className='text-md lg:text-grow'>
          <Button className='p-2 m-5 bg-blue-700 justify-center shadow-xl rounded'>
            <div>
              <Link to='/' className='flex place-content-center mt-2 lg:inline-block lg:mt-1
              text-gray-300 hover:text-red-600 mr-2 '>Home</Link>
            </div>
          </Button>
          <Button className='p-2 m-5 bg-blue-700 justify-center shadow-xl rounded'>
            <div>
              <Link to='/about' onClick={ clicked } className='flex place-content-center mt-2 lg:inline-block lg:mt-1
              text-gray-300 hover:text-red-600 shadow-xl'>
                About
              </Link>
            </div>
          </Button>
          <Button className='p-2 m-5 bg-blue-700 justify-center shadow-xl rounded'>
            <div>
              <Link to='/dashboard' onClick={ clicked } className='flex place-content-center mt-2 lg:inline-block lg:mt-1
              text-gray-300 hover:text-red-600'>
                Cars To See
              </Link>
            </div>
          </Button>
          {
            !isAuthenticated?
            <Button className="p-2 m-5 bg-blue-700 justify-center shadow-xl rounded">
              <div>
                <Link to="/" onClick={signInOnClick} className='flex place-content-center mt-2 lg:inline-block lg:mt-1
              text-gray-300 hover:text-red-600'>
                  Sign In
                </Link>
              </div>
            </Button>
            :
            <Button className="p-2 m-5 bg-blue-700 justify-center shadow-xl rounded">
              <div>
                <Link to="/" onClick={signOutOnClick} className='flex place-content-center mt-2 lg:inline-block lg:mt-1
              text-gray-300 hover:text-red-600'>
                Sign Out
                </Link>
              </div>
            </Button>
          }</div>
      </div> 
      ):(
        <></>
      )}
    </nav>
  )
}
export default Navbar;