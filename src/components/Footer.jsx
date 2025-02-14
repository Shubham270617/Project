import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Office Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">हमारे कार्यालय</h3>
          <p className="font-semibold">केन्द्रीय कार्यालय</p>
          <p className="text-gray-400 mb-2">पाटलिपुत्र</p>
          <p className="font-semibold">क्षेत्रीय कार्यालय</p>
          <p className="text-gray-400 mb-2">पास में, दृष्टि, देखभाल</p>
          <p className="font-semibold">ज़ोनल कार्यालय</p>
          <p className="text-gray-400">पाटलिपुत्र,पटना, बिहार 800013</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">संपर्क सूत्र</h3>
          <p className="font-semibold">फ़ोन नंबर</p>
          <p className="text-gray-400 mb-2">+91 97714 38740</p>
          {/* <p className="text-gray-400 mb-2">+91 8017125500</p> */}
          <p className="font-semibold">ई-मेल आईडी</p>
          <p className="text-gray-400">akhilviprakalyanam@gmail.com</p>
          {/* <p className="text-gray-400">info@vifa.in</p> */}
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-bold mb-3">विप्र महाकुंभ</h3>
          <div className="grid grid-cols-2 text-gray-400">
            <p>कोलकाता</p>
            <p>मेहंदीपुर बालाजी</p>
            <p>गुवाहाटी</p>
            <p>सागवाड़ा</p>
            <p>दिल्ली</p>
            <p>थानागाजी</p>
            <p>जयपुर</p>
            <p>जालोर</p>
            <p>सूरत</p>
            <p>कोटा</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">सोशल मीडिया</h3>
          <div className="flex gap-4">
            <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
            <FaYoutube className="text-red-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        © 2023 Vipra Foundation. All Rights Reserved. Website Design & Developed
        by <span className="text-white font-semibold">BrandFlu</span>
      </div>
    </footer>
  );
};

export default Footer;
