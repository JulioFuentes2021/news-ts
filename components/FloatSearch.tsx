import SearchIcon from "@mui/icons-material/Search"

const FloatSearch = ({
  show,
  setShow,
}: {
  show: boolean
  setShow: (x: boolean) => void
}) => {
  // const showM = useContext(newsContext)
  // const { show, num, setShow } = showM

  // useEffect(() => {
  //   showM?.setShow(!showM.show)
  //   console.log(show)
  //   console.log(num)
  // }, [])

  const handleSearch = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <div
      className={`${
        !show ? "h-0" : "h-16"
      } overflow-hidden bg-gray-100 transition-height ease-in-out duration-1000 flex items-center relative z-50`}
    >
      <div className={`flex justify-center h-16 p-3`}>
        <div className=" flex justify-end items-center">
          <div className="flex items-center">
            <input
              className="text-black focus:outline focus:outline-blue-800 placeholder:italic placeholder:text-black placeholder:px-2 placeholder:font-semibold px-2 text-sm h-10 focus:outline-1 border-none"
              type="text"
              placeholder="Enter your searched"
            />
          </div>
          <div className="cursor-pointer h-10 w-10 bg-red-500 text-white flex justify-center items-center">
            <SearchIcon onClick={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatSearch
