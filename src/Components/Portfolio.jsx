import React from 'react';
import Fiverr from '../assests/Portfolio/Fiverr.png';
import Lately from '../assests/Portfolio/Lately.png';
import Jefit from "../assests/Portfolio/Jefit.png";
import Yoox from "../assests/Portfolio/Yoox.png";
import Trendy from "../assests/Portfolio/Trendy.png";
import Shoeland from "../assests/Portfolio/Shoeland.png";

const Portfolio = () => {

    const portfolios=[
        {
            id:1,
            src: Lately,
            title:"Lately.com",
            glink:"https://github.com/Ujjawal0203/racial-spiders-3687",
            nlink:"https://harmonious-semolina-d8a151.netlify.app/",
            detail:"This is a clone of Coschedule website, it helps us organise our days accordingly and save out time and help us in time management.",
            tech:"Tech Stack: HTML | CSS | JavaScript"
        },
        {
            id:2,
            src: Jefit,
            title:"Jefit.com",
            glink:"https://github.com/RajParmar03/Jefit_clone",
            nlink:"https://venerable-boba-d7e055.netlify.app/",
            detail:"Jefit is a very famous fitness website on the internet, that can help people to plan their daily workout and also manage their diet plan. ",
            tech:"Tech Stack: HTML | CSS | JavaScript"
        },
        {
            id:3,
            src: Yoox,
            title:"Yoox.com",
            glink:"https://github.com/saikhmirsat/Yoox.com-Clone",
            nlink:"https://luminous-sprinkles-3af9e6.netlify.app/",
            detail:"This is a clone of Yoox.com. It is an e-commerce website, they sells Clothes, Shoes and various beauty products. This is a collaborative project.",
            tech:"Tech Stack: HTML | CSS | JavaScript | React"
        },
        {
            id:4,
            src: Trendy,
            title:"Trendy.com",
            glink:"https://github.com/kaushalragini/physical-push-7511",
            nlink:"https://hilarious-conkies-eaedd3.netlify.app/",
            detail:"With the trendiest, freshest, and most unique styles from across India and the world, Trendy-Fashion invites you to express your personal style fearlessly, and with a confidence and optimism that cannot be easily shaken.",
            tech:"Tech Stack: HTML | CSS | JavaScript | React"
        },
        {
            id:5,
            src: Fiverr,
            title:"Fiverr.com",
            glink:"https://github.com/Ujjawal0203/minor-crowd-1344/tree/main/my-project",
            nlink:"https://inspiring-raindrop-9d2b46.netlify.app/",
            detail:"This is a clone of Coschedule website, it helps us organise our days accordingly and save out time and help us in time management.",
            tech:"Tech Stack: HTML | CSS | JavaScript | React"
        },
        {
            id:6,
            src: Shoeland,
            title:"Shoeland.com",
            glink:"https://github.com/pallavijainy/scenic-wood-5639",
            nlink:"https://shoe-land-hub.vercel.app/",
            detail:"Shoeland is an e-commerce website which offers wide selection of stylish and comfortable footwear for men, women, and children.",
            tech:"Tech Stack: HTML | CSS | JavaScript | React JS | Chakra UI | Express JS | MongoDB"
        }
    ]

  return (
    <div  style={{paddingTop:"200px"}} name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0' style={{textAlign:"center"}} >
            {portfolios.map(({id,src,nlink,glink,detail,title,tech})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-500 hover:scale-105' />
            <div className='mt-2 text-xl'>{title}</div>
            <div className='mt-2'>{detail}</div>
            <div className='mt-2 text-red-400'>{tech}</div>
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
