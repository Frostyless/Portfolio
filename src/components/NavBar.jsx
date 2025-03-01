import React from 'react'
import { useEffect, useState,useRef } from 'react'
import gsap from 'gsap';

const NavBar = () => {
    const navRef = useRef(null);
    const lastScrollY = useRef(0); 
    //lastScrollY is now an object, hence to access the current value, we use the .current
    useEffect( () => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 200 && currentScrollY > lastScrollY.current) {
                // Scrolling down after 50px 
                gsap.to(navRef.current, {opacity:0, y:-20, duration:0.5, ease:"power2.out"})
            } else {
                gsap.to(navRef.current, {opacity:1, y:0, duration:0.5, ease:"power2.out"})
            }
            lastScrollY.current = currentScrollY
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    useEffect (() => {
      const tl = gsap.timeline({defaults:{duration:1, ease:"power2.out"}});
      
      tl.fromTo(navRef.current,
        {y:-20, opacity:0},
        {y:0, opacity:1}
      )
    })




  return (
    <div ref={navRef}className=' navbar border border-white/50 fixed top-4 z-10 left-1/2 shadow-lg -translate-x-1/2 w-[90%] backdrop-blur-lg bg-white/10 max-w-4xl rounded-2xl flex p-4 justify-between items-center'>
        <div className='text-white text-xl font-anonymous ml-3 '>
            frost.
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
       
    </div>

  )
}

export default NavBar