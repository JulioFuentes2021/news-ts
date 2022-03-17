import RelevantNews from "./RelevantNews"
import MainNew from "./MainNew"

const RelevantNewsBox = () => {
  return (
    <div className="flex flex-col gap-3">
      <MainNew />
      <span className="bg-red-700 font-bold text-white w-16 m-auto text-center">
        Now
      </span>
      <RelevantNews />
      <RelevantNews />
      <RelevantNews />
      <RelevantNews />
      <RelevantNews />
      <RelevantNews />
    </div>
  )
}

export default RelevantNewsBox
