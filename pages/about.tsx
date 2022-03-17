import Header from "@/components/Header"
import MainNew from "@/components/MainNewsSection/MainNew"
import RelevantNewsBox from "@/components/MainNewsSection/RelevantNewsBox"

const about = () => {
  return (
    <div className="h-screen">
      <Header />
      <RelevantNewsBox />
      <div className="h-screen">Div1</div>
      <div className="h-screen">Div2</div>
    </div>
  )
}

export default about
