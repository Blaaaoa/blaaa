import React from 'react';

const Projects = () => {
  return (
    <div className='px-5 lg:px-20 py-10'>
      <div className='mt-24 shadow-lg rounded-lg border-2 shadow-gray-400 font-mono'>
        <div className='flex flex-wrap justify-around py-6'>
          <div className='flex flex-col items-center p-4'>
            <div className='text-3xl'>100</div>
            <div className='text-md'>Projects</div>
          </div>
          <div className='flex flex-col items-center p-4'>
            <div className='text-3xl'>1M+</div>
            <div className='text-md'>Users</div>
          </div>
          <div className='flex flex-col items-center p-4'>
            <div className='text-3xl'>10</div>
            <div className='text-md'>Awards</div>
          </div>
          <div className='flex flex-col items-center p-4'>
            <div className='text-3xl'>5</div>
            <div className='text-md'>Years</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
