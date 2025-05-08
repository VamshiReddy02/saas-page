import { motion, useScroll, useTransform } from 'framer-motion'
import codeEditor from '../assets/images/ai-editors.png'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

const About = () => {

    const clipRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: clipRef,
        offset: ["center end", "center center"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) =>{
            console.log("Image scroll progress:", v);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const width = useTransform(scrollYProgress, [0,1], ["50vw", "100vw"]);
    const height = useTransform(scrollYProgress, [0,1], ["50vh", "100vh"]);
    
     

  return (
    <section className='min-h-screen w-screen'>
        <div className={clsx("container relative mb-8 mt-36 flex flex-col items-center gap-5")}>
            <p className='text-3xl md:text-5xl font-medium text-center mt-6 max-w-2xl mx-auto'>Improve the developer experience with <span className='text-blue-300'>TEZ</span></p>
        </div>
        <div className='h-[150vh] w-screen' ref={clipRef}>
            <motion.div
                className='mask-clip-path about-image' style={{
                    width,
                    height,
                    borderRadius: "24px",
                    position: "sticky",
                    top: "20vh",
                    margin: "0 auto",
                    overflow: "hidden"
                }}>
                <img src={codeEditor} alt='' className='absolute left-0 top-0 size-full object-cover'/>
            </motion.div>
        </div>
    </section>
  )
}

export default About