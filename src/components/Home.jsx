import React from 'react';
import ProfileImage from '../Joshpic.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='sm:text-7xl font-bold text-white'>I am a Full Stack JavaScript Developer.</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I am a recent graduate of the Full Stack JavaScript bootcamp at
            Grand Circus in Detroit,Michigan.
            I am currently looking for entry-level or junior Developer
            roles.
            I enjoy building web applications using technologies like
            React JS,Node JS,Tailwind,Express JS,and MongoDB. 
          </p>

          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
            bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
            </button>
          </div>
        </div>
        <div>
          <img src= {ProfileImage} alt="my profile" className=' object-contain rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home