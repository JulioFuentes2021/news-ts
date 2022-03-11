import React from "react"
import Navbar from "@/components/Navbar"
import Browser from "@/components/Browser"
import SocialMedias from "@/components/SocialMedias"
import Modal from "./Modal"
import Menu from "./Menu"
import { useContext } from "react"
import { newsContext } from "context/store"

const Index = () => {
  const showM = useContext(newsContext)
  const { show, visible, floatMenu, setFloatMenu } = showM

  return (
    <div className="flex flex-col">
      <Modal>
        <Menu floatMenu={floatMenu} setFloatMenu={setFloatMenu} />
      </Modal>
      <div className={`${!visible && "absolute"}`}>
        <SocialMedias />
      </div>
      <div className={`${!visible && "order-2 m-24"}`}>
        <Browser />
      </div>
      <div className={`${!visible && "order-1 fixed w-full"}`}>
        <Navbar floatMenu={floatMenu} setFloatMenu={setFloatMenu} />
      </div>
    </div>
  )
}

export default Index
