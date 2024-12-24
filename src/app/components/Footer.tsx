import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
<footer className="w-full bg-gradient-to-r from-black  to-[#06141B] mt-36 text-white py-8" style={{ boxShadow: "-20px -20px 60px #06141B" }}>
  <div className="container mx-auto text-center lg:text-left px-6 md:px-12">
    
    {/* Footer Links Section */}
    <div className="flex flex-col lg:flex-row gap-20 mb-8 space-y-8 lg:space-y-0">
      {/* Quick Links */}
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <h3 className="text-lg font-semibold">All Blogs</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">Front-End Skills 2024</Link>
          </li>
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">Latest Skills</Link>
          </li>
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">UX/UI Trends 2024</Link>
          </li>
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">AI in Web Design</Link>
          </li>
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">Agentic Ai</Link>
          </li>
          <li>
            <Link href="/" className="text-[#CCD0CF] hover:text-emerald-500">Web Performance Tips</Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <h3 className="text-lg font-semibold">Services</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/projects" className="text-[#CCD0CF] hover:text-emerald-500">Web Design</Link>
          </li>
          <li>
            <Link href="/projects" className="text-[#CCD0CF] hover:text-emerald-500">Web Development</Link>
          </li>
          <li>
            <Link href="/projects" className="text-[#CCD0CF] hover:text-emerald-500">Website Maintenance</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="space-y-2">
          <li>
            <a href="mominshykh7@gmail.com" className="text-[#CCD0CF] hover:text-emerald-500">mominshykh7@gmail.com</a>
          </li>
          <li>
            <a href="0315-2309503" className="text-[#CCD0CF] hover:text-emerald-500">+92 315 230 95 03</a>
          </li>
          <li>
            <p className="text-[#CCD0CF]">Address: Nazimabad no 1, Karachi, Pakistan</p>
          </li>
        </ul>
      </div>
    </div>

    {/* Social Media and Footer Links */}
    <div className="mt-12">
      <p className='text-[#CCD0CF]'>© {new Date().getFullYear()} Muhammad Momin. All rights reserved.</p>
      </div>
      <div className="flex justify-end space-x-6">
        <Link href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" target="_blank">
          <FaLinkedin className="hover:text-emerald-500 text-[#CCD0CF] cursor-pointer" size={24} />
        </Link>
        <Link href="https://github.com/MuhammadMomin095" target="_blank">
          <FaGithub className="hover:text-emerald-500 text-[#CCD0CF] cursor-pointer" size={24} />
        </Link>
        <Link href="https://www.instagram.com/mominshykh/?hl=en" target="_blank">
          <FaInstagram className="hover:text-emerald-500 text-[#CCD0CF] cursor-pointer" size={24} />
        </Link>
        <Link href="https://www.facebook.com/mominshykh.xx" target="_blank">
          <FaFacebook className="hover:text-emerald-500 text-[#CCD0CF] cursor-pointer" size={24} />
        </Link>
    </div>
  </div>
</footer>

  );
};

export default Footer;
