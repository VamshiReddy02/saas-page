import React from 'react'
import Tag from '../components/Tag'

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
            <Tag>Features</Tag>
            <h2>Where power meets <span>simplicity</span></h2>
            <div>
                <div>
                    <div></div>
                    <div>
                        <h3>Real-time collaboration</h3>
                        <p>Work togather seamlessly with conflict-free team editing </p>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <h3>Interactive Prototyping</h3>
                        <p>Engage your clients with Prototyping that reacts to user actions</p>
                    </div>
                </div>
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