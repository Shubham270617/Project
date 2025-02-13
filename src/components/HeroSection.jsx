import React from "react";
import Vipra from "../assets/Vipra.png"
import Hanuman from "../assets/Hanuman.jpg"
import Shivaa from "../assets/Shivaa.jpg"
import Sarsawati from "../assets/Sarsawati.jpg"
const HeroSection = () => {
  return (
    <div className="bg-red-700 text-white py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">विप्र फाउंडेशन - पुष्टभूमि</h1>
          <p className="text-lg leading-relaxed">
            भारत का सांस्कृतिक इतिहास इस सत्य का साक्षी है कि सृष्टि के उषा काल से लेकर
            आज तक ब्राह्मणों ने अपने अपूर्व चिंतन एवं तप से ज्ञान-विज्ञान अर्जित करके इस
            महादेश एवं समाज का शोभा श्रृंगार किया है। वे स्वयं के लिए नहीं राष्ट्र,
            संस्कृति एवं मानवता के लिए जीते आए हैं।
          </p>
          <p className="text-lg leading-relaxed mt-4">
            समाज एवं राष्ट्र जब भी दिगभ्रमित हुआ तो ब्रह्म-कर्तव्य से अनुप्राणित होकर
            विप्र मनीषियों ने सुपथ दिखाया।
          </p>
          <button className="mt-6 bg-white text-red-700 font-semibold py-2 px-4 rounded-full">
            ... और पढ़ें
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
          <div className="relative flex justify-center items-center">
            <img
              src={Hanuman}
              alt="Goddess"
              className="w-40 h-40 rounded-full border-4 border-white absolute top-0 left-8"
            />
            <img
              src={Shivaa}
              alt="Parshuram"
              className="w-40 h-40 rounded-full border-4 border-white absolute bottom-0 left-0"
            />
            <img
              src={Sarsawati}
              alt="Saraswati"
              className="w-40 h-40 rounded-full border-4 border-white absolute bottom-0 right-0"
            />
            <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center absolute">
              <img
                src={Vipra}
                alt="VIPRA Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
