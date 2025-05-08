import { useScroll, useTransform } from 'framer-motion';
import Tag from '../components/Tag';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const text = ` You’re pushing to build amazing projects fast, but traditional editors bog you down with clutter and repetitive tasks.`;
const words = text.split(' ');


const DevEx = () => {
  const scollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scollTarget, offset: ['start end','end end']})
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0,1], [0, words.length])

  useEffect(() => {
    wordIndex.on('change', (latest) =>{
      setCurrentWord(latest)
    })
  }, [wordIndex])

  return (
    <section className='py-28 lg:py-40'>
        <div className="container">
          <div className='sticky top-20 md:top-28 lg:top-30'>
              <div className='flex justify-center'>
                  <Tag>DevEx Layers</Tag>
              </div>
              <div className='text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10'>
                  <span>Your coding deserves smarter tools.</span>{" "}
                  <span>
                    {words.map((word, wordIndex) => (
                      <span key={wordIndex} className={twMerge("transition duration-500 text-white/15" ,wordIndex < currentWord && "text-white")}>{`${word} `}</span>
                    ))} 
                  </span>
                  <span className='text-blue-300 block'>That&apos;s why we created TEZ.</span>
              </div>
            </div>
            <div className='h-[150vh]' ref={scollTarget}></div>
        </div>
    </section>
  )
}

export default DevEx