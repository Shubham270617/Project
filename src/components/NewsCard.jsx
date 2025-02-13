import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title:
      "राजस्थान के राज्यपाल महामहिम श्री हरिबाऊ बागड़े जी द्वारा दीप प्रज्वलन करके विप्र फाउंडेशन जोन 12C के विभागीय अधिवेशन का आयोजन महाराष्ट्र में",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-20-at-00.53.48.jpeg?resize=1200%2C675&ssl=1",
    date: "January 27, 2025",
  },
  {
    id: 2,
    title:
      "गुवाहाटी में विप्र फाउंडेशन ने मिजोरम के राज्यपाल जनरल वी. के. सिंह का किया सम्मान",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2025/01/vipra-foundation.webp?w=526&ssl=1",
    date: "January 16, 2025",
  },
  {
    id: 3,
    title:
      "उत्तर बंगाल, बिहार, सिक्किम, असम, भूटान, नेपाल, बांग्लादेश की सीमाओं पर बसा सिलीगुड़ी कोलकाता के बाद प्रदेश का सबसे बड़ा शहर है।",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2024/12/469121741_637283258621996_9044306697773470575_n.jpg?w=526&ssl=1",
    date: "December 25, 2024",
  },

  {
    id: 1,
    title:
      "राजस्थान के राज्यपाल महामहिम श्री हरिबाऊ बागड़े जी द्वारा दीप प्रज्वलन करके विप्र फाउंडेशन जोन 12C के विभागीय अधिवेशन का आयोजन महाराष्ट्र में",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2024/12/471544664_652817080401947_6325394965762920970_n.jpg?w=526&ssl=1",
    date: "January 27, 2025",
  },
  {
    id: 2,
    title:
      "गुवाहाटी में विप्र फाउंडेशन ने मिजोरम के राज्यपाल जनरल वी. के. सिंह का किया सम्मान",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2024/12/466673815_624731956543793_497210323435072236_n.jpg?w=526&ssl=1",
    date: "January 16, 2025",
  },
  {
    id: 3,
    title:
      "उत्तर बंगाल, बिहार, सिक्किम, असम, भूटान, नेपाल, बांग्लादेश की सीमाओं पर बसा सिलीगुड़ी कोलकाता के बाद प्रदेश का सबसे बड़ा शहर है।",
    image: "https://i0.wp.com/viprafoundation.in/wp-content/uploads/2024/12/465795207_617696457247343_2424962424600856211_n-1.jpg?w=526&ssl=1",
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
