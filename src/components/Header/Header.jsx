import { Link, NavLink } from "react-router-dom"
import { LOGO_URL } from "../../utils"


const Header = () => {
  return (
    <div className="shadow-lg">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
           <Link to="/"> <img className="w-[80px]" src={LOGO_URL}/></Link>
        </div>

        <ul className="flex gap-x-16 mx-3">
            <li>
                <NavLink className={({isActive}) => `${isActive ? "text-orange-500" : "text-gray-700"} text-lg font-Roboto font-semibold hover:font-bold hover:duration-150 `} to="/">Home</NavLink>
            </li>
            <li >
                <NavLink className={({isActive}) => `${isActive ? "text-orange-500" : "text-gray-700"} text-lg font-Roboto font-semibold hover:font-bold hover:duration-150 `} to="/about">About</NavLink>
            </li>
            <li >
                <NavLink className={({isActive}) => `${isActive ? "text-orange-500" : "text-gray-700"} text-lg font-Roboto font-semibold hover:font-bold hover:duration-150 `} to="/contact">Contact</NavLink>
            </li>
        </ul>

        <div className="flex items-center gap-x-10">
            <Link><div className="font-semibold text-lg font-Roboto">Cart</div></Link>
            <button className="bg-orange-500 px-3 py-2 rounded-lg font-semibold text-lg text-gray-800 hover:bg-orange-400 hover:duration-150">Log In</button>
        </div>

    </div>
    </div>
  )
}

export default Header