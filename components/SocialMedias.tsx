import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"

const SocialMedias = () => {
  return (
    <div className="flex justify-around bg-gray-100 mb-16">
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
    </div>
  )
}

export default SocialMedias
