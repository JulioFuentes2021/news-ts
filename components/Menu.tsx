import CloseIcon from "@mui/icons-material/Close"
import SearchBar from "./SearchBar"
import CustomNewLink from "./CustomNewLink"
import NewLink from "./NewLink"
import { useState } from "react"

const Menu = ({
  floatMenu,
  setFloatMenu,
}: {
  floatMenu: boolean
  setFloatMenu: (x: boolean) => void
}) => {
  // const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div
      className={`${
        floatMenu ? "-translate-x-px" : "-translate-x-full"
      } transition-translate ease duration-1000 w-60 md:w-1/3 overflow-y-auto overflow-x-hidden fixed top-0 bg-blue-800 h-screen flex flex-col items-center`}
    >
      <div className="w-full flex justify-end">
        <section className="hover:border-blue-500 hover:text-blue-500 cursor-pointer border-4 border-white text-white w-8 flex place-content-center font-extrabold mx-4 mt-4">
          <CloseIcon
            onClick={() => setFloatMenu(!floatMenu)}
            className="font-extrabold"
          />
        </section>
      </div>
      <SearchBar />
      <CustomNewLink />
      <NewLink />
      <NewLink />
    </div>
  )
}

export default Menu
