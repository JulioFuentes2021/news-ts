// import { ReactElement, ReactNode, useEffect } from "react"
// import ReactDOM from "react-dom"

// // type Children = ReactNode

// function Modal() {
//   return ReactDOM.createPortal(
//     <div>Hello from modal</div>,
//     document.getElementById("modal-root") as HTMLDivElement
//   )
// }

// export default Modal

import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import React, { useEffect, useRef, useState, ReactNode } from "react"
import ReactDOM from "react-dom"

type Children = ReactJSXElement

function Modal({ children }: { children: Children }) {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser) {
    return ReactDOM.createPortal(
      children,
      document.getElementById("modal-root") as HTMLElement
    )
  } else {
    return null
  }
}

export default Modal
