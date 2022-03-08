import SearchIcon from "@mui/icons-material/Search"
import SearchBar from "./SearchBar"

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
      <SearchBar />
    </div>
  )
}

export default FloatSearch
