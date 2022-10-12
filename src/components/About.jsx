import React from 'react'

function About() {
  return (
    <div name ="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore ipsum molestiae praesentium impedit sit, doloribus 
                reprehenderit minus nihil velit ut, dolore odio! Eum quibusdam repellendus quia dolore voluptatibus. Quas amet excepturi
                doloremque placeat fugiat. Omnis vitae dolorem velit debitis deleniti. 
                Reiciendis consectetur at incidunt. Beatae, hic? Illo, repudiandae sapiente.</p>
            <br></br>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos nam inventore itaque? Cumque eveniet omnis deserunt iste in
                possimus eius, excepturi fugit quibusdam atque neque rem expedita vero minima fugiat corrupti ex, sequi ipsa, sit architecto 
                 beatae nulla? Doloremque obcaecati facilis, totam voluptatum harum alias delectus explicabo repudiandae impedit?
            </p>
        </div>
    </div>
  )
}

export default About