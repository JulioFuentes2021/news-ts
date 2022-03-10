import CloseIcon from "@mui/icons-material/Close"
import SearchBar from "./SearchBar"
import CustomNewLink from "./CustomNewLink"
import NewLink from "./NewLink"

const Menu = () => {
  return (
    <div className="bg-blue-800 w-1/4 flex flex-col items-center">
      <div className="w-full flex justify-end">
        <section className="hover:border-blue-500 hover:text-blue-500 cursor-pointer border-4 border-white text-white w-8 flex place-content-center font-extrabold mx-4 mt-4">
          <CloseIcon className="font-extrabold" />
        </section>
      </div>
      <SearchBar />
      <CustomNewLink />
      <NewLink />
    </div>
  )
}

export default Menu
