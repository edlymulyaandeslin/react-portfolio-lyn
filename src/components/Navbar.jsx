import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-3xl font-semibold">EdMA</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
