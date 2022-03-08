import { createContext, ReactNode, useState } from "react"

type ContextValue = {
  show: boolean
  num: number
  setShow: (x: boolean) => void
  visible: boolean
  setVisible: (x: boolean) => void
}

type Children = ReactNode

const newsContext = createContext({} as ContextValue)

const Store = ({ children }: { children: Children }) => {
  const [show, setShow] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const num = 12

  return (
    <newsContext.Provider value={{ show, num, setShow, visible, setVisible }}>
      {children}
    </newsContext.Provider>
  )
}

export { newsContext, Store }
