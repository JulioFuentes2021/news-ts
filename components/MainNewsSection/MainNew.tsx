import React from "react"
import Image from "next/image"

const MainNew = () => {
  return (
    <div className="block">
      <Image
        src={`https://gcdn.lanetaneta.com/wp-content/uploads/2020/12/El-creador-de-One-Piece-se-burla-de-Shanks-haciendo-780x470.jpeg`}
        alt="image"
        sizes="50vw"
        layout="intrinsic"
        quality={100}
        width={520}
        height={520}
        priority={true}
      />
    </div>
  )
}

export default MainNew
