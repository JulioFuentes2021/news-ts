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
    <div className={`overflow-hidden absolute top-8`}>
      <div
        className={`${
          !show ? "-translate-y-full invisible" : "visible"
        } transition-translate ease duration-1000 flex justify-center w-80 h-16`}
      >
        <div className="w-80 flex justify-end items-center">
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
