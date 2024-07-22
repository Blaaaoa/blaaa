'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Know from './know';

const Main = () => {
  return (
    <section className='px-5 lg:px-20 py-10'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
        <div className='col-span-7'>
          <div className='mx-auto'>
            <h1 className='mb-4 lg:mb-10 text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-red-600 inline-block text-transparent bg-clip-text'>
              Hello, I&apos;m
            </h1>
            <h2 className='text-2xl lg:text-4xl font-bold'>
              <TypeAnimation
                sequence={[
                  'Augusto Varghese',
                  2000,
                  'Human',
                  1000,
                  'Friend',
                  1000,
                  'Software Engineer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <p className='mt-4 lg:mt-8 text-gray-500'>
            Fellow being, nice to meet you. Hello everyone!
          </p>
        </div>

        <div className='col-span-5 flex justify-center lg:justify-end'>
          <div className='w-60 h-60 lg:w-80 lg:h-80 relative'>
            <Image
              src="https://envs.sh/iB1.png"
              alt="Profile Picture"
              layout="fill"
              className='rounded-full object-cover'
            />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 mt-10 lg:mt-20'>
          <button className='px-10 py-3 rounded-full bg-white text-black'>
            Know Me
          </button>
          <button
            onClick={Know}
            className='px-10 py-3 rounded-full bg-white text-black'
            type='button'
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;
