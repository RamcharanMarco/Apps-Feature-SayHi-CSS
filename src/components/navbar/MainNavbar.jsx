import '../../css/mainNavbar.css'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <div className="mainNavbar">
        <h1>HITMEUP</h1>
        <div className="links">
        <Link to='/'>home</Link>
          <Link to='/login'>login</Link>
          <Link to='/signup'>signup</Link>
        </div>
    </div>
  )
}

export default MainNavbar