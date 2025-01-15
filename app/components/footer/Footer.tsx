import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E332A] text-gray-400 py-8 h-[154px]">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <Image src={Logo} alt="Logo" width={60} height={60} />

        <div>
          <h3 className="text-white font-bold mb-4">About Us</h3>
          <ul>
            <li>Careers</li>
            <li>Media Centre</li>
            <li>Our Communities</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Subscribe</h3>
          <p>Save with our latest fares and offers.</p>
          <button className="bg-green-600 text-white py-2 px-4 mt-2">
            SUBSCRIBE
          </button>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Help</h3>
          <ul>
            <li>Help and Contact</li>
            <li>Special Assistance</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link legacyBehavior href="#">
              <FaFacebookF size={20} />
            </Link>
            <Link legacyBehavior href="#">
              <FaInstagram size={20} />
            </Link>
            <Link legacyBehavior href="#">
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
