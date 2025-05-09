import Logo from "../assets/images/logo.gif"

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];


const Footer = () => {
  return (
    <section className='py-16'>
        <div className="container">
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-6'>
                <div>
                    <img src={Logo} alt='' />
                </div>
                <div>
                    <nav className='flex gap-6'>
                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.label} className='text-white/50 text-sm'>{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer