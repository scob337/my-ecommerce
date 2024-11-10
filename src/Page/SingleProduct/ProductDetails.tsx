import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProductProps {
  productImage: string;
  productImages: string[];
  title: string;
  price: number;
  oldPrice: number;
  description: string[];
  reviews: number;
  ratings: number[];
  sellerName: string;
  sellerImage: string;
}

const ProductDetails: React.FC<ProductProps> = ({
  productImage,
  productImages,
  title,
  price,
  oldPrice,
  description,
  reviews,
  ratings,
  sellerName,
  sellerImage,
}) => {
  const [currentImage, setCurrentImage] = useState(productImage);
  const [fade, setFade] = useState(false);

  const handleImageClick = (image: string) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImage(image);
      setFade(false);
    }, 300);
  };

  const handlePrevImage = () => {
    const currentIndex = productImages.indexOf(currentImage);
    const prevIndex = currentIndex === 0 ? productImages.length - 1 : currentIndex - 1;
    handleImageClick(productImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = productImages.indexOf(currentImage);
    const nextIndex = currentIndex === productImages.length - 1 ? 0 : currentIndex + 1;
    handleImageClick(productImages[nextIndex]);
  };

  return (
    <div className="font-sans bg-gray-800">
      <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 w-full text-center">
            <div className="bg-gray-800 px-4 py-12 rounded-xl relative flex items-center justify-center">
              <div
                onClick={handlePrevImage}
                className="absolute left-5 bg-[#ddd] h-[50px] w-[50px] rounded-full cursor-pointer flex justify-center items-center hover:opacity-75 hover:bg-red-500 hover:text-white transition-all z-10"
              >
                <FaArrowLeft />
              </div>
              <img
                src={currentImage}
                alt="Product"
                className={`w-full h-[500px] rounded object-cover mx-auto transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
              />
              <div
                onClick={handleNextImage}
                className="absolute right-5 bg-[#ddd] h-[50px] w-[50px] rounded-full cursor-pointer flex justify-center items-center hover:opacity-75 hover:bg-red-500 hover:text-white transition-all z-10"
              >
                <FaArrowRight />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`w-[100px] h-[100px] flex items-center justify-center bg-gray-800 p-1 cursor-pointer ${currentImage === image ? 'border-2 border-red-500' : ''}`}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-white">{title}</h2>

            <div className="flex space-x-2 mt-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-[18px] ${index < ratings.length ? "fill-red-500" : "fill-[#CED5D8]"}`}
                  viewBox="0 0 14 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                  />
                </svg>
              ))}
              <h4 className="text-white text-base">{reviews} Reviews</h4>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-white text-4xl font-semibold">${price}</p>
              <p className="text-gray-400 text-base">
                <span className="text-white line-through">${oldPrice}</span>
                <span className="text-sm ml-1">Tax included</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded"
              >
                Buy now
              </button>
              <button
                type="button"
                className="min-w-[200px] px-4 py-2.5 border border-red-500 bg-transparent text-white text-sm font-semibold rounded hover:bg-red-500 hover:text-white hover:border-red-500"
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">About the coffee</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ul className="flex">
                <li className="text-white font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-red-500 cursor-pointer transition-all">
                  Reviews
                </li>
                <li className="text-white font-semibold text-sm py-3 px-8 cursor-pointer">
                  Seller
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  Reviews({reviews})
                </h3>

                <div className="space-y-3 mt-4">
                  {ratings.map((rating, index) => (
                    <div key={index} className="flex items-center">
                      <p className="text-sm text-white font-semibold">{rating}</p>
                      <svg
                        className="w-5 fill-red-500 ml-1"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div
                          className="w-[2/3] h-full rounded bg-red-500"
                          style={{ width: `${(rating / 5) * 100}%` }}
                        />
                      </div>
                      <p className="text-sm text-white font-semibold ml-3">
                        {Math.round((rating / 5) * 100)}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start mt-8">
                <img
                  src={sellerImage}
                  className="w-12 h-12 rounded-full border-2 border-white"
                  alt="Seller"
                />

                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-white">{sellerName}</h4>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 fill-red-500"
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
