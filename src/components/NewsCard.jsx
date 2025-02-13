import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title:
      "राजस्थान के राज्यपाल महामहिम श्री हरिबाऊ बागड़े जी द्वारा दीप प्रज्वलन करके विप्र फाउंडेशन जोन 12C के विभागीय अधिवेशन का आयोजन महाराष्ट्र में",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "January 27, 2025",
  },
  {
    id: 2,
    title:
      "गुवाहाटी में विप्र फाउंडेशन ने मिजोरम के राज्यपाल जनरल वी. के. सिंह का किया सम्मान",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "January 16, 2025",
  },
  {
    id: 3,
    title:
      "उत्तर बंगाल, बिहार, सिक्किम, असम, भूटान, नेपाल, बांग्लादेश की सीमाओं पर बसा सिलीगुड़ी कोलकाता के बाद प्रदेश का सबसे बड़ा शहर है।",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "December 25, 2024",
  },

  {
    id: 1,
    title:
      "राजस्थान के राज्यपाल महामहिम श्री हरिबाऊ बागड़े जी द्वारा दीप प्रज्वलन करके विप्र फाउंडेशन जोन 12C के विभागीय अधिवेशन का आयोजन महाराष्ट्र में",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "January 27, 2025",
  },
  {
    id: 2,
    title:
      "गुवाहाटी में विप्र फाउंडेशन ने मिजोरम के राज्यपाल जनरल वी. के. सिंह का किया सम्मान",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "January 16, 2025",
  },
  {
    id: 3,
    title:
      "उत्तर बंगाल, बिहार, सिक्किम, असम, भूटान, नेपाल, बांग्लादेश की सीमाओं पर बसा सिलीगुड़ी कोलकाता के बाद प्रदेश का सबसे बड़ा शहर है।",
    image: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_640.jpg",
    date: "December 25, 2024",
  },
];

const NewsCards = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={article.image} alt="News" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              <div className="flex items-center text-gray-500 mt-2">
                <FaRegCalendarAlt className="mr-2" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* Read More Button */}
        <div className="flex justify-center mt-6">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition">
          सभी समाचार पढ़ें
        </button>
      </div>
    </div>
  );
};
export default NewsCards;
