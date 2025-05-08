import { useState } from 'react';
import Tag from '../components/Tag'
import { FaPlus } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
    {
      question: "How is the TEZ AI Code Editor different from traditional IDEs?",
      answer:
        "Unlike traditional IDEs, our AI Code Editor leverages machine learning to provide intelligent code suggestions, automated debugging, and real-time performance insights, streamlining your development process.",
    },
    {
      question: "Does the AI Editor support multiple programming languages?",
      answer:
        "Absolutely! The editor supports 30+ programming languages including JavaScript, Python, Go, Rust, Java, and more. We’re constantly adding new language support based on developer feedback.",
    },
    {
      question: "How secure is my code when using the AI features?",
      answer:
        "Security is our top priority. All code analysis and AI suggestions are processed locally or over secure, encrypted channels. We never store your code without your permission.",
    },
    {
      question: "Can I customize the AI suggestions?",
      answer:
        "Yes! You can fine-tune AI behavior to match your coding style, disable specific suggestions, and even train custom models for your team’s coding standards.",
    },
    {
      question: "Does it integrate with my existing tools?",
      answer:
        "Our AI Editor integrates seamlessly with popular tools like GitHub, GitLab, Jira, Slack, and CI/CD pipelines, so you can keep your workflow smooth and connected.",
    },
  ];
  

const Faqs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className='py-24'>
        <div className="container">
            <div className='flex justify-center'>
                <Tag>Faqs</Tag>
            </div>
            <h2 className='text-6xl font-medium mt-6 text-center max-w-xl mx-auto'>
                Questions? We've got <span className='text-blue-400'>answers</span>
            </h2>
            <div className='mt-12 flex flex-col gap-6 max-w-xl mx-auto'>
                {faqs.map((faq, faqIndex) => (
                    <div key={faq.question} 
                        className='bg-neutral-900  rounded-2xl border border-white/10 p-6' 
                        onClick={() => setSelectedIndex(faqIndex)}>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-medium'>{faq.question}</h3>
                            <FaPlus className={twMerge('text-blue-600 flex-shrink-0 transition duration-300', selectedIndex == faqIndex && "rotate-45")} />
                        </div>
                        <AnimatePresence>
                        { selectedIndex === faqIndex && (
                            <motion.div
                                initial = {{
                                    height: 0,
                                    marginTop: 0,
                                }}
                                animate = {{
                                    height: "auto",
                                    marginTop: 24,
                                }}
                                exit = {{
                                    height: 0,
                                    marginTop: 0,
                                }} 
                                className={twMerge('overflow-hidden')}>
                                <p className='text-white/50'>{faq.answer}</p>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Faqs