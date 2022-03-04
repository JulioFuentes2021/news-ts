import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import { useContext } from "react"
import { newsContext } from "context/store"
import SearchIconComponent from "./SearchIcon"

const Navbar = () => {
  const showM = useContext(newsContext)
  const { show } = showM

  return (
    <nav
      className={` ${
        !show && "z-20"
      } flex items-center justify-between relative h-12 bg-blue-800 text-white`}
    >
      <ul>
        <li className="mx-4 hidden lg:block">
          <MenuIcon className="cursor-pointer" />
        </li>
      </ul>
      <ul className="relative w-10/12 lg:w-3/4 h-full">
        <div className="flex relative items-center justify-evenly h-full whitespace-nowrap overflow-y-hidden overflow-x-auto">
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4 hover:text-blue-400">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
        </div>
      </ul>
      <ul>
        <li className="mx-4 lg:hidden m-auto bg-red-500">
          <MenuIcon className="cursor-pointer" />
        </li>
        <li className="mx-4 hidden lg:block">
          <SearchIconComponent />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar