import Image from "next/image"

const RelevantNews = () => {
  return (
    <div className="w-auto flex flex-col sm:flex-row justify-center items-center border-b border-slate-200">
      <div className="hidden sm:block m-2 w-3 h-3 bg-red-600 rounded-full"></div>
      <Image
        src={`https://gcdn.lanetaneta.com/wp-content/uploads/2020/12/El-creador-de-One-Piece-se-burla-de-Shanks-haciendo-780x470.jpeg`}
        layout="fixed"
        width={180}
        height={100}
        alt="Image"
        quality={100}
        priority={true}
      />
      <span className="m-2 max-w-xs font-semibold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        tenetur deleniti eos, molestiae itaque sapiente? Este seria el titulo de
        la noticia
      </span>
    </div>
  )
}

export default RelevantNews
