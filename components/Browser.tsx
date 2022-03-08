import SearchIconComponent from "./SearchIcon"
import { useContext, useEffect } from "react"
import { newsContext } from "context/store"

const Browser = () => {
  const showM = useContext(newsContext)
  const { show, num, setShow } = showM

  return (
    <div className="flex justify-center py-4 bg-white">
      <div className="w-3/4 flex justify-between lg:justify-center items-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <strong className="text-blue-800">Your</strong>
          <strong className="bg-red-700 text-white rounded-md mx-2">
            News
          </strong>
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl lg:hidden">
          <SearchIconComponent />
        </div>
      </div>
    </div>
  )
}

export default Browser
