import SearchIcon from "@mui/icons-material/Search"
import FloatSearch from "./FloatSearch"
import { useContext, useEffect } from "react"
import { newsContext } from "context/store"

const SearchIconComponent = () => {
  const showM = useContext(newsContext)
  const { show, num, setShow } = showM

  const handleSearch = () => {
    setShow(!show)
  }

  return (
    <div className="flex flex-col items-end w-full">
      <SearchIcon
        onClick={handleSearch}
        className="cursor-pointer hover:text-blue-400"
      />
      <FloatSearch show={show} setShow={setShow} />
    </div>
  )
}

export default SearchIconComponent
