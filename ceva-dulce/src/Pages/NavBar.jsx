import { GiCakeSlice } from "react-icons/gi"
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (

      <div >
      <button><GiCakeSlice Link to={'/home'} /></button>
    </div>
  )
}
export default NavBar