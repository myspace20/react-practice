import { NavLink } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {

 const error = {
  color : 'gray'
 }

  return (
    <div className="container" >
      <div className="not-found">
        <h1 style={error}>404</h1>
        <p>Not Found</p>
        <NavLink to='/'>Home</NavLink>
      </div>
    </div>
  )
}

