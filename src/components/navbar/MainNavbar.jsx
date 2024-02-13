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
          <Link to='/pwd/reset/send-code'>reset-pwd</Link>
          <Link to='/pwd/reset'>reset-pwd-page</Link>
        </div>
    </div>
  )
}

export default MainNavbar