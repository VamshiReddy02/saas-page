import FeatureCard from '../components/FeatureCard';
import Tag from '../components/Tag'
import avatar1 from '../assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '../assets/images/avatar-florence-shaw.jpg'
import avatar3 from '../assets/images/avatar-lula-meyers.jpg'
import Avatar from '../components/Avatar';

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

const Features = () => {
  return (
    <section className='py-24'>
        <div className="container">
            <div className='flex justify-center'>
                <Tag>Features</Tag>
            </div>
            <h2 className='text-6xl font-medium text-center mt-6'>
                Where power meets <span className='text-lime-400'>simplicity</span>
            </h2>
            <div className='mt-12 grid grid-cols-1 gap-8'>
                <FeatureCard 
                    title='Real-time collaboration' 
                    description='Work togather seamlessly with conflict-free team editing '
                >
                    <div className='aspect-video flex items-center justify-center'>
                        <Avatar className='z-40'>
                            <img src={avatar1} alt='' className='rounded-full'/>
                        </Avatar>
                        <Avatar className='-ml-6 border-indigo-500 z-30'>
                            <img src={avatar2} alt='' className='rounded-full'/>
                        </Avatar>
                        <Avatar className='-ml-6 border-amber-500 z-20'>
                            <img src={avatar3} alt='' className='rounded-full'/>
                        </Avatar>
                        <Avatar className='-ml-6 border-transparent'>
                            <div className='size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1'>
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <span className='size-1.5 rounded-full bg-white inline-flex' key={i}></span>
                                ))}
                            </div>
                        </Avatar>
                    </div>
                </FeatureCard>
                <FeatureCard 
                    title='Interactive Prototyping' 
                    description='Engage your clients with Prototyping that reacts to user actions'
                >
                    <div className='aspect-video flex items-center justify-center'>
                        <p className='text-4xl font-extrabold text-white/20 text-center'>
                            We've achieved{" "} <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>incredible</span> growth this year
                        </p>
                    </div>
                </FeatureCard>
                <div>
                    <div></div>
                    <div>
                        <h3>Keyboard Quick Actions</h3>
                        <p>Powerfull commands to help you create designs more quickly</p>
                    </div>
                </div>
            </div>
            <div>
                {features.map(feature => (
                    <div key={feature}>
                        <span></span>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features