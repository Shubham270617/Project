import React from "react";


const initiatives = [
  {
    title: "आठवा वचन",
    image: "https://viprafoundation.in/wp-content/uploads/2022/06/8.png"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image: "https://viprafoundation.in/wp-content/uploads/2022/06/save-cow.png"
  },
  {
    title: "विप्र शिक्षा निधि",
    image: "https://viprafoundation.in/wp-content/uploads/2022/06/vipra-shiksha-nidhi.png"
  },
  {
    title: "आठवा वचन",
    image: "https://viprafoundation.in/wp-content/uploads/2022/08/vicci_logo.jpg"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image:"https://viprafoundation.in/wp-content/uploads/2022/08/sanskaroday_new_logo.jpg"
  },
  {
    title: "विप्र शिक्षा निधि",
    image:"https://viprafoundation.in/wp-content/uploads/2022/06/VRVS.png"
  },
  {
    title: "आठवा वचन",
    image:"https://viprafoundation.in/wp-content/uploads/2022/06/sarve-utkarsh.jpg"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image: "https://viprafoundation.in/wp-content/uploads/2022/06/join.png"
  },
  {
    title: "विप्र शिक्षा निधि",
    image: "https://viprafoundation.in/wp-content/uploads/2022/06/join.png"
  },
  {
    title: "आठवा वचन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "विप्र शिक्षा निधि",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "आठवा वचन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "विप्र शिक्षा निधि",
    image:"https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "आठवा वचन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "गो संवर्धन से पुण्यवर्धन",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "विप्र शिक्षा निधि",
    image: "https://m.media-amazon.com/images/I/51KoswJ3fKL._AC_UF1000,1000_QL80_.jpg"
  },
];

const InitiativeCards = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center"
          >
            <img
              src={initiative.image}
              alt={initiative.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold ">{initiative.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativeCards;
