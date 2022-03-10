import { useRef, useState } from "react"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

const CustomNewLink = () => {
  const subtitlesBox = useRef<HTMLDivElement>(null)

  const handleSubtitlesBox = () => {
    console.log(subtitlesBox)
  }

  const [subtitles, setSubtitles] = useState<boolean>(false)

  return (
    <ul className="w-full text-white">
      <li
        className={`${
          subtitles && "bg-blue-150"
        } h-12 border-b border-b-white flex items-center justify-between px-4`}
      >
        <span className="text-xl font-semibold">Title new</span>
        <span
          className="cursor-pointer"
          onClick={() => setSubtitles(!subtitles)}
        >
          {!subtitles ? (
            <ArrowDownwardIcon className="text-xl" />
          ) : (
            <ArrowUpwardIcon />
          )}
        </span>
      </li>
      <div
        ref={subtitlesBox}
        className={`transition-height ease-in-out duration-1000 overflow-hidden ${
          !subtitles ? "h-0" : `h-${12 * 3}`
        }`}
      >
        <li className="h-12 hover:text-blue-800 border-b border-b-black flex items-center px-6 text-black font-medium bg-gray-50">
          Subtitle
        </li>
        <li className="h-12 hover:text-blue-800 border-b border-b-black flex items-center px-6 text-black font-medium bg-gray-50">
          Subtitle
        </li>
        <li className="h-12 hover:text-blue-800 border-b border-b-black flex items-center px-6 text-black font-medium bg-gray-50">
          Subtitle
        </li>
      </div>
    </ul>
  )
}

export default CustomNewLink
