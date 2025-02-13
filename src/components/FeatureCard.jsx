import { FaUsers, FaHandshake, FaPeopleCarry } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-red-500 text-5xl" />,
    title: "राष्ट्रीय एकता",
    description:
      "सब साधन से रहे समुन्नत, भगवन देश हमारा। देव प्रज्ञा से पूरित विप्र समाज ने अपने दिंगंत भेदी तप व चिंतन से हमारे दिव्य राष्ट्र।",
    bgColor: "bg-red-50",
  },
  {
    icon: <FaHandshake className="text-red-500 text-5xl" />,
    title: "सामाजिक समरसता",
    description:
      "जातीय संकीर्णता का ब्राह्मण समाज में कभी भी कोई स्थान नहीं रहा है। हम सर्वदा ही विशाल उदारता के पक्षधर रहे हैं।",
    bgColor: "bg-yellow-50",
  },
  {
    icon: <FaPeopleCarry className="text-red-500 text-5xl" />,
    title: "स्वजातीय गतिशीलता",
    description:
      "अपनी परम्परा का ज्ञान, जातीय चेतना और आत्मविश्वषण की त्रिवेणी समाज में प्रवाहित होती रहती है तभी समाज साधातु तीर्थराज की।",
    bgColor: "bg-green-50",
  },
];

const FeatureCards = () => {
  return (
    <div className="container mx-auto my-12 px-6">
      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-md ${feature.bgColor}`}
          >
            {feature.icon}
            <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-red-700">
              ➝ <span>अधिक देखें</span>
            </button>
          </div>
        ))}
      </div>

      {/* Section Divider */}
      <div className="mt-10 border-t border-black w-full text-center">
        <h2 className="text-2xl font-bold mt-3">केंद्रीय समाचार</h2>
      </div>
    </div>
  );
};

export default FeatureCards;
