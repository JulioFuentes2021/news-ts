import React from "react"
import Navbar from "@/components/Navbar"
import Browser from "@/components/Browser"
import SocialMedias from "@/components/SocialMedias"
import { useContext } from "react"
import { newsContext } from "context/store"

const Index = () => {
  const showM = useContext(newsContext)
  const { show, visible } = showM

  return (
    <div className="flex flex-col">
      <div className={`${!visible && "absolute"}`}>
        <SocialMedias />
      </div>
      <div className={`${!visible && "order-2 m-24"}`}>
        <Browser />
      </div>
      <div className={`${!visible && "order-1 fixed w-full"}`}>
        <Navbar />
      </div>
    </div>
  )
}

export default Index
