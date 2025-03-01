import React from "react";
import gsap from "gsap";
import {useRef, useEffect} from "react" 
const Hero = () => {

  const designerRef = useRef(null);
  const lineRef = useRef(null);
  const developerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current,
        {opacity:1,y:0},
        {opacity:0, y:-100, duration:1, ease:"power2.out",  
        scrollTrigger: {
            trigger:heroRef.current[0],
            start: "bottomm -20%",
            toggleActions:"play none none reverse",
        },
   }
)
})

  useEffect( () => {
    const tl = gsap.timeline({defaults:{duration:1, ease:"power2.out"}});

    tl.fromTo(designerRef.current,
      {x:"-100%", opacity:0},
      {x:"0%", opacity:1}
    )

    .fromTo(lineRef.current,
      {scaleX:0, opacity:0},
      {scaleX:1, opacity:1,transformOrigin:"center"},"-=0.5"
    )

    .fromTo(developerRef.current,
      {x:"100%", opacity:0},
      {x:"0%", opacity:1},"-=0.5"
    )

  },[])
  return (
    <div  className="bg-black overflow-hidden flex justify-center h-screen w-full">
      <div  ref={heroRef} className="relative flex flex-col text-white items-start mt-[20%] md:mt-[25%] lg:mt-[20%]">
    {/* DESIGNER (Shifted Left) */}
        <div ref={designerRef} className="font-archivo text-6xl md:text-8xl lg:text-9xl ml-[-10%] md:ml-[-30%]">
          DESIGNER
        </div>

      {/* White Line (Centered) */}
    <div ref={lineRef} className="w-full h-[2px] bg-white mt-2"></div>

    {/* DEVELOPER (Shifted Right) */}
    <div ref={developerRef} className="font-archivo font-light text-6xl md:text-8xl lg:text-9xl relative ml-[10%] md:ml-[30%]">
      DEVELOPER
    </div>
  
  </div>
</div>

  )
}

export default Hero;