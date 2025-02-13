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
            संस्कृति एवं मानवता के लिए जीते आए हैं।  समाज एवं राष्ट्र जब भी दिगभ्रमित हुआ तो ब्रह्म-कर्तव्य से अनुप्राणित होकर
            विप्र मनीषियों ने सुपथ दिखाया।
          </p>
          <p className="text-lg leading-relaxed mt-4">
          कालक्रम से समय बदला, परिस्थितियाँ बदली और संस्कृतियों के संघात में जीवन दृष्टि भी प्रभावित हुई । पश्चिमीकरण ही आधुनिकीकरण का पर्याय बन गया । परूषार्थ चतुष्टय में अर्थ और काम ही धर्म और मोक्ष को लीलते गये । स्व-देश एवं स्व-संस्कृति की गौरवमयी भावना के क्रमश: क्षीण होते जाने से क्षेत्रवाद, वर्गवाद, सम्प्रदायवाद, जाति-उपजाति एवं भाषावाद लोगों के दिल एंव दिमाग पर ऐसे छा गए कि पूर्वजों के उदात्त जीवन मूल्य गौण होते चले गये ।
          </p>
          <p className="text-lg leading-relaxed mt-4">
          छीजत के इस दौर में ब्राह्मण समाज की भूमिका अत्यन्त महत्वपूर्ण एंव आवश्यक हो गई है । देश, समाज और व्यक्ति-व्यक्ति में तेजस्विता का संचार करने का प्राथमिक दायित्व परम्परा एवं नियति दोनों ही दृष्टियों से ब्राह्मणों के कंधों पर आता है । 
          </p>
          <button className="mt-6 bg-white text-red-700 font-semibold py-2 px-4 rounded-full cursor-pointer">
            ... और पढ़ें
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
          <div className="relative flex justify-center">
            <img
              src={Hanuman}
              alt="Goddess"
              className="w-40 h-40 rounded-full "
            />
            <img
              src={Shivaa}
              alt="Sage"
              className="w-40 h-40 rounded-full  absolute left-[-100px] top-20"
            />
            <img
              src={Sarsawati}
              alt="Saraswati"
              className="w-40 h-40 rounded-full absolute right-[-100px] top-20"
            />
            <div className="absolute bg-white p-3 rounded-full shadow-lg top-20">
              <img src={Vipra} alt="Vipra Foundation" className="w-14" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
