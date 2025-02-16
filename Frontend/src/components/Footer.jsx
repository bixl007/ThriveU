import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-zinc-800 text-white py-12 px-6 md:px-12 rounded-t-full">
        <div className="ml-52 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ThriveU</h3>
            <p className="text-gray-400">Transforming Education, Transforming You.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/aboutus" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">E-books</a></li>
              <li><a href="#" className="hover:text-yellow-500">Webinars</a></li>
              <li><a href="#" className="hover:text-yellow-500">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Community</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Student Forum</a></li>
              <li><a href="#" className="hover:text-yellow-500">Mentorship</a></li>
              <li><a href="#" className="hover:text-yellow-500">Events</a></li>
              <li><a href="#" className="hover:text-yellow-500">Partnerships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500">Copyright Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-blue-500" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>
        <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
          © 2025 ThriveU. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
