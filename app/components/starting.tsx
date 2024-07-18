import React from 'react'
import Image from "next/image"

const main = () => {
  return (
    <div>
      <h1 className='text-white mb-10 mt-10 lg:text-6xl font-extrabold'>Hello, I'm Augusto Varghses</h1>
      <p className='mb-8 text-grey'>fellow being nce to meet you gois hi</p>
      <div>
         <Image src="/public/image.png" alt="nothng"
         width={200}
         height={200} />
      </div>

    </div>
  )
}

export default main
