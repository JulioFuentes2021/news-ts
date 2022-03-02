import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-12 bg-blue-800 text-white">
      <ul>
        <li className="mx-4 hidden lg:block">
          <MenuIcon className="cursor-pointer" />
        </li>
      </ul>
      <ul className="relative w-10/12 lg:w-3/4 h-full">
        <div className="flex relative items-center justify-evenly h-full whitespace-nowrap overflow-y-hidden overflow-x-auto">
          <li className="mx-4">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="#">
              <a>Topic</a>
            </Link>
          </li>
          <li className="mx-4">
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
          <SearchIcon />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
