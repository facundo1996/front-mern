import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <h1>MERN MYSQL</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  )
}
