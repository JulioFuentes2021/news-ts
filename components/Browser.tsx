import SearchIcon from "@mui/icons-material/Search"

const Browser = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="w-3/4 flex justify-between lg:justify-center items-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <strong className="text-blue-800">Your</strong>
          <strong className="bg-red-700 text-white rounded-md mx-2">
            News
          </strong>
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl lg:hidden">
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Browser
