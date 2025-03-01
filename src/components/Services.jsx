import React, {useRef,useEffect} from 'react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
   const serviceRef = useRef(null);

   useEffect(() => {
       gsap.fromTo(serviceRef.current,
        {opacity:0,y:-50},
        {opacity:1, y:0, duration:1, ease:"power2.out",
        scrollTrigger: {
            trigger:serviceRef.current,
            start: "start 80%",
            toggleActions:"play none none reverse",
        },
        }
       )
   })
  return (
    <div id="services"className=' flex flex-col bg-black min-h-screen p-10 text-white'> 
     <div className="max-w-4xl mx-auto mt-5 ">
        <div className=' md:ml-0 md:pl-6 lg:pl-10 p-6 flex w-full  justify-center md:justify-start lg:justify-start  '>
            <h1 ref={serviceRef} className='text-7xl font-semi-bold mb-10 tracking-wide font-plex-mono'>Services</h1>
        </div>
        <div className="flex  flex-col md:flex-row gap-12 w-full items-center justify-center ">
        <ServiceCard
          price="$200+"
          title="Brand Identity & Logo Design"
          description="Reshape your brand with us today and sign up now Muahahaha"
          items={["Brand Identity Design", "Logo Design", "Icons"]}
        />
        <ServiceCard
          price="$1K+"
          title="UI/UX Design & Web Development"
          description="Suitable for landing pages with aesthetic design elements"
          items={["Structured Wireframes", "Responsive Design", "Figma drafts"]}
        />
        </div>
        </div>
    </div>
  )
}

function ServiceCard ({price, title, description, items}) {
    const cardRef = useRef([]);
    
    useEffect(() => {
            gsap.fromTo(cardRef.current,
                {opacity:0,y:100},
                {opacity:1, y:0, duration:2, ease:"power2.out",  
                scrollTrigger: {
                    trigger:cardRef.current[0],
                    start: "top 100%",
                    toggleActions:"play none none reverse",
                },
           }
        )
    })
    return (
        <div ref={(el) => cardRef.current.push(el)}  className=' border border-white/50 bg-gray-100 p-12 rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lgborder border-gray-white relative '>
            <div className='text-sm border border-white/50 px-2 py-1 rounded-md inline-block'>
                {price}
            </div>
            <h2 className='text-4xl font-semibold mt-5 leading-none'>
                {title}
            </h2>
            <div className='mt-5 text-gray-white opacity-55 text-s'>
                {description}
            </div>
            <ul className='mt-4 space-y-4 opacity-85 text-gray-300'>
                {items.map((item,index) => {
                    return <li key={index} className='border-b border-white pb-1'>
                                 <div className='mt-7'>
                                    — {item}  
                                 </div>
                                      
                            </li>
                })}
            </ul>
            <button className='mt-15 w-full bg-#1E1E1D hover:bg-black text-white py-2 rounded-full border border-white'>
                SHOW +
            </button>
        </div>
    )
}
export default Services