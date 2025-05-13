import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container py-10 px-5 text-center mx-auto max-w-5xl">
        {/* About Us Section */}
        <h2 className="text-4xl font-bold text-gray-800 mt-3">About Us</h2>
        <hr className="w-20 mx-auto mb-6 border-2 border-gray-300" />
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to <strong className="text-gray-900">MeroPasal</strong> – your one-stop destination for quality products and a hassle-free shopping experience. We carefully curate a selection of 
          <strong> fashion, clothing, jewelry, and electronics</strong> to ensure top-tier quality, competitive prices, and exceptional customer service. Shop with confidence and convenience, knowing that we are committed to bringing you the best.
        </p>

        {/* Our Products Section */}
        <h3 className="text-3xl font-semibold text-gray-800 mt-12">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[{
            title: "Men's Clothing",
            img: "https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY="
          }, {
            title: "Women's Clothing",
            img: "https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM="
          }, {
            title: "Jewelry",
            img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
          }, {
            title: "Electronics",
            img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
          }].map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 transform transition duration-300 hover:scale-105">
              <img className="w-full h-40 object-cover rounded-t-lg" src={product.img} alt={product.title} />
              <div className="mt-4">
                <h6 className="text-lg font-semibold text-gray-900">{product.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
