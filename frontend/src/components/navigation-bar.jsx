import "../css/base/nav.css";
import { Link } from 'react-router-dom';
export default function nav() {
  return (
    <>
      <div className="nav-container">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/product/list'>Inventory</Link>
        </div>
        <div>
          <Link to='/product/list'>Search</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
        <div>
          <Link to='/'>User</Link>
        </div>
      </div>
    </>
  )
}
