import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">WarmPaws</h3>
          <p className="text-gray-300">Caring for your pets during the chilly winter months.</p>
          <p className="mt-2 text-sm text-gray-400">Dhaka, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer transition">My Profile</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Info</h3>
          <p>Email: <a href="mailto:info@warmpaws.com" className="hover:text-yellow-400">info@warmpaws.com</a></p>
          <p>Phone: <a href="tel:+880123456789" className="hover:text-yellow-400">+880 1234-56789</a></p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-4 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} WarmPaws. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="hover:text-yellow-400 underline">Privacy Policy</a> | 
          <a href="#" className="hover:text-yellow-400 underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
