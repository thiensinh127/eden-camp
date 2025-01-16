import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2E332A] text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm px-4 sm:px-6 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link legacyBehavior href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                Media Centre
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                Our Communities
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Subscribe</h3>
          <p className="mb-2">Save with our latest fares and offers.</p>
          <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
            SUBSCRIBE
          </button>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <Link legacyBehavior href="#">
                Help and Contact
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                Special Assistance
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
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

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
