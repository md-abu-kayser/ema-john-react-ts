import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
          About Ema John
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Welcome to Ema John, your premier destination for quality products
              at great prices. We are committed to offering the best shopping
              experience with a wide range of products to meet all your needs.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
            <p className="mb-6">
              Our mission is to provide high-quality products with exceptional
              customer service. We believe in making online shopping easy,
              convenient, and enjoyable for everyone.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Wide selection of products across various categories</li>
              <li>Competitive prices and regular discounts</li>
              <li>Fast and reliable shipping</li>
              <li>Secure payment options</li>
              <li>Responsive customer support</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              Have questions or need assistance? Our customer service team is
              here to help you.
            </p>
            <p>
              Email: support@emajohn.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Hours: Monday-Friday, 9AM-5PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
