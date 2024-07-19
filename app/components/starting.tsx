import React from 'react'
import Image from 'next/image'

const main = () => {
  return (
    <section>
       <div className='grid grid-cols-1 lg:grid-cols-12 ml-20 mt-20' >
      <div className='col-span-7 place-self-center'>

        <h1 className='text-white mb-10 mt-10 lg:text-6xl font-extrabold'>
          Hello, I'm Augusto Varghses
        </h1>
        <p className='mb-8 text-gray-500'>
          fellow being nce to meet you gois hi
        </p>
      
      </div>

      <div className='col-span-5 mt-200'>
        
        <div className='rounded-full bg-gray-500 w-60 h-70 relative '>
        <img
          src="https://envs.sh/iB1.png"
          alt="nothng"
          width={300}
          height={300} />
        </div>
      </div>
      <div>
        <button className='px-10 py-3 rounded-full bg-white text-black'>KnowMe</button>
      </div>
      <div>
        <button className='px-10 py-3 rounded-full ml-10 bg-white text-black'>DownladCV </button>
      </div>

    </div>
    </section>
   
  )
}

export default main
