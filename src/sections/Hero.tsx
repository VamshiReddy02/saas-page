import Button from "../components/Button"
import designImage1 from "../assets/images/design-example-1.png"
import designImage2 from "../assets/images/design-example-2.png"

const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <img src={designImage1} alt="" />
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block">
                <img src={designImage2} alt="" />
            </div>
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">$7.5M seed round raised</div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impact design,<br/>created effortlessly</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti repudiandae porro quas quasi repellendus minima, aperiam nam tempora unde. 
            </p>
            <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1"/>
                <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">Sign Up</Button>
            </form>
        </div>
    </section>
  )
}

export default Hero