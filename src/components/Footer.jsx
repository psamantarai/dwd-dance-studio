import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () =>
{
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to={'/about'} className="link link-hover">About us</Link>
        <Link to={'/gallery'} className="link link-hover">Gallery</Link>
        <Link to={'/contactus'} className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/dwd_studio__/">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://www.youtube.com/@dancewithdivi2603">
            <FaYoutube className="text-3xl" />
          </a>
          <a href="https://facebook.com">
            <FaFacebookF className="text-3xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Made with ❤️  © {new Date().getFullYear()} - DWD Studio
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
