import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <FcGraduationCap className="-rotate-20" size={25} />  SkillSphere
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Learn skills from industry experts. Build your future with modern
              courses in development, design, and marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-indigo-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-indigo-400">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm">Email: support@skillsphere.com</p>
            <p className="text-sm mt-1">Phone: +880 123 456 789</p>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-indigo-400">
                <FaFacebook size={30}/>
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaLinkedin size={30}/>
              </a>
              <a href="#" className="hover:text-indigo-400">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
