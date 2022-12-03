import React from 'react';
import Fiverr from '../assests/Portfolio/Fiverr.png';
import Lately from '../assests/Portfolio/Lately.png';
import Jefit from "../assests/Portfolio/Jefit.png";


const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src: Lately,
            glink:"https://github.com/Ujjawal0203/racial-spiders-3687",
            nlink:"https://harmonious-semolina-d8a151.netlify.app/"
        },
        {
            id:2,
            src: Jefit,
            glink:"https://github.com/Ujjawal0203/aquatic-discussion-8005",
            nlink:"https://venerable-boba-d7e055.netlify.app/"
        },
        {
            id:3,
            src: Fiverr,
            glink:"https://github.com/Ujjawal0203/minor-crowd-1344/tree/main/my-project",
            nlink:"https://inspiring-raindrop-9d2b46.netlify.app/"
        },
      
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id,src,nlink,glink})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-500 hover:scale-105' />
            <div className='flex justify-center items-center'>
            <a href={nlink} target="_blank" rel="noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
            </a>
            <a href={glink} target="_blank" rel="noreferrer">
                <button className='w-1/2 px-6 py-3 m-4 duration-500 hover:scale-110'>Code</button>
            </a>
            </div>
        </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
