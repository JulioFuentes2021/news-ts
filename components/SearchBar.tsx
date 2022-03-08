import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <div className="p-4 flex justify-end items-center">
      <div className="flex items-center">
        <input
          className="text-black focus:outline focus:outline-blue-800 placeholder:italic placeholder:text-black placeholder:px-2 placeholder:font-semibold px-2 text-sm h-10 focus:outline-1 border-none"
          type="text"
          placeholder="Enter your searched"
        />
      </div>
      <div className="cursor-pointer h-10 w-10 bg-red-500 text-white flex justify-center items-center">
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBar
