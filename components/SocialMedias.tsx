import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { useRef } from "react"
import { useInView, InView } from "react-intersection-observer"
import { useContext } from "react"
import { newsContext } from "context/store"

type Options = {
  threshold?: number
  rootMargin?: string
  root?: Element | null
}

const SocialMedias = () => {
  const target = useRef<HTMLDivElement>(null)
  const test = () => {
    console.log(target.current)
  }

  const showM = useContext(newsContext)
  const { setVisible, visible } = showM

  //   const { ref, inView, entry } = useInView({
  //     /* Optional options */
  //     threshold: 0.5,
  //   })

  return (
    <InView
      as="div"
      threshold={0.9}
      onChange={(inView, entry) => {
        setVisible(!visible)
        console.log(inView)
      }}
      onClick={test}
      className="flex justify-around bg-gray-100 mb-16"
    >
      <span className="text-2xl text-gray-600 py-2 hover:text-gray-300 transition-text ease duration-500 cursor-pointer">
        <FacebookIcon />
      </span>
      <span className="text-2xl text-gray-600 py-2 hover:text-gray-300 transition-text ease duration-500 cursor-pointer">
        <TwitterIcon />
      </span>
      <span className="text-2xl text-gray-600 py-2 hover:text-gray-300 transition-text ease duration-500 cursor-pointer">
        <InstagramIcon />
      </span>
      <span className="text-2xl text-gray-600 py-2 hover:text-gray-300 transition-text ease duration-500 cursor-pointer">
        <YouTubeIcon />
      </span>
    </InView>
  )
}

export default SocialMedias
