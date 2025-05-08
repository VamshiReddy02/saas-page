import darkSaasLandingPage from "../assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "../assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "../assets/images/ai-startup-landing-page.png";
import Tag from "../components/Tag";
import Button from "../components/Button";

const toolFeatures = [
    {
      company: "CodeSmith AI",
      title: "Real-time Code Autocompletion",
      results: [
        { title: "Increased developer productivity by 60%" },
        { title: "Reduced syntax errors by 45%" },
        { title: "Supports 20+ programming languages seamlessly" },
      ],
      image: darkSaasLandingPage,
    },
    {
      company: "DevPilot",
      title: "AI-Powered Debugging",
      results: [
        { title: "Identifies bugs in real-time with 85% accuracy" },
        { title: "Suggests optimized fixes instantly" },
        { title: "Integrates with popular IDEs like VSCode & JetBrains" },
      ],
      image: lightSaasLandingPage,
    },
    {
      company: "NextGen IDE",
      title: "Natural Language to Code",
      results: [
        { title: "Transforms plain English into functional code blocks" },
        { title: "Boosts rapid prototyping speed by 70%" },
        { title: "Understands complex multi-step prompts" },
      ],
      image: aiStartupLandingPage,
    },
  ];
  

const FeaturesCards = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag className="uppercase font-semibold tracking-widest text-center">
            Real World Results
          </Tag>
        </div>

        <h2 className="text-3xl md:text-5xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Flagship Features
        </h2>

        <p className="text-center md:text-lg lg:text-xl text-white/50 mt-4 max-w-md mx-auto">
          See how I transformed code into Engaging project in few clicks
        </p>

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {toolFeatures.map((feature, featureIndex) => (
            <div
              key={feature.title}
              className="bg-neutral-900 rounded-3xl relative z-0 overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20
                after:pointer-events-none after:absolute after:inset-0 after:z-10 after:content-[''] after:outline-2 after:outline
                after:-outline-offset-2 after:rounded-3xl after:outline-white/20 sticky "
                 style={{
                    top: `calc(120px + ${featureIndex * 40}px`
                }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                {/* Text Section */}
                <div className="lg:pb-16">
                  <div className="text-lg uppercase inline-flex gap-2 font-bold tracking-widest text-blue-300">
                    <span>{feature.company}</span>
                  </div>

                  <h3 className="text-2xl mt-2 md:mt-5 md:text-4xl">{feature.title}</h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {feature.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        {result.title}
                      </li>
                    ))}
                  </ul>

                  <Button className="h-12 w-full md:w-auto font-semibold mt-8">
                    Try it yourself
                  </Button>
                </div>

                {/* Image Section */}
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
