import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Vipra from "../assets/Vipra.png"

const Navbar = () => {
  const [active, setActive] = useState("होम");
  const [dropdown, setDropdown] = useState(null);

  return (
    <div>
      {/* Top Red Banner */}
      <div className="bg-orange-600 text-white text-center py-2 text-sm font-medium">
        राष्ट्र एवं समाज को समर्पित ब्राह्मण समाज के वैश्विक संगठन विप्र फाउंडेशन की वेबसाइट में आपका स्वागत है।
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-3 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={Vipra} alt="Vipra Foundation" className="h-20" />
            <span className="text-xl font-bold">Akhil Vipra Kalyanam</span>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            {[
              "होम",
              "पृष्ठभूमि",
              { name: "उद्देश्य", submenu: ["उद्देश्य 1", "उद्देश्य 2"] },
              { name: "संगठन", submenu: ["टीम", "संस्थान"] },
              "विप्र महाकुंभ",
              "समाचार",
              "चित्रदीर्घा",
              "विप्र परिवार",
              "संपर्क",
            ].map((item, index) =>
              typeof item === "string" ? (
                <li
                  key={item}
                  className={`cursor-pointer hover:text-red-600 ${
                    active === item ? "text-red-600 border-b-2 border-red-600" : ""
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </li>
              ) : (
                <li
                  key={item.name}
                  className="relative cursor-pointer hover:text-red-600"
                  onMouseEnter={() => setDropdown(index)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{item.name}</span>
                    <FaChevronDown className="text-xs" />
                  </div>
                  {/* Dropdown Menu */}
                  {dropdown === index && (
                    <ul className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40">
                      {item.submenu.map((sub) => (
                        <li
                          key={sub}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setActive(item.name)}
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Join Button */}
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
            ज्वाइन विप्रा
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
