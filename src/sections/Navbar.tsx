import logoImage from '../assets/images/logo.gif'
import { IoMenu } from "react-icons/io5"
import Button from '../components/Button'

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
]

const Navbar = () => {
  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-4 md:pr-2 items-center bg-neutral-950/70 backdrop-blur">
          
          <div>
            <img src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end gap-4 items-center">
            <IoMenu className="h-10 w-10 md:hidden" />
            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navbar
