import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import CV from '../assets/cv/CV_Edly_Mulya_Andeslin_Engineer.pdf';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-3xl font-semibold">EdMA</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={CV}
          target="_blank"
          className="bg-neutral-700 px-2 py-1 rounded text-xs hover:bg-gray-500 transition-all"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/edly-mulya-andeslin-79a52326b/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/edlymulyaandeslin/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/__elyynn/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
