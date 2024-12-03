import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/product-api";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState<string>("white");
  const [selectedSize, setSelectedSize] = useState<string>("Standard");
  const [quantity, setQuantity] = useState<number>(1);
  const [wishlist, setWishlist] = useState<boolean>(false);

  const handleAddToWishlist = () => {
    setWishlist(!wishlist);
  };

  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details.</div>;
  }

  return (
    <div className="flex flex-wrap gap-10 p-8">
      {/* Левый блок с изображением */}
      <div className="flex flex-col gap-4 items-center">
        <img
          src={data?.url_photo}
          alt={data?.title}
          className="w-80 h-80 object-cover border rounded-lg"
        />
        <div className="grid grid-cols-4 gap-2">
          {/* Для эскизов используем одно изображение, можно заменить на массив эскизов */}
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={data?.url_photo}
              alt={`Thumbnail ${index + 1}`}
              className="w-24 h-24 object-cover border rounded-lg cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>

      {/* Правый блок с деталями */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{data?.title}</h2>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">
            {"★".repeat(data?.rating || 0)}
            {"☆".repeat(5 - (data?.rating || 0))}
          </span>
          <span className="text-gray-500">
            ({data?.sold_count || 0} Reviews)
          </span>
          <span className="text-green-600">In Stock</span>
        </div>
        <div className="text-2xl font-bold text-red-500 mb-4 text-start">
          ${data?.price}
        </div>
        <p className="text-gray-600 mb-4 text-start">{data?.description}</p>

        {/* Выбор цвета */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-start">Colours:</h4>
          <div className="flex gap-4">
            {["white", "red", "green"].map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Выбор размера */}
        <div className="mb-4 text-start">
          <h4 className="text-sm font-semibold mb-2">Model:</h4>
          <div className="flex gap-2">
            {[data?.model, `${data?.model} Max`].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSize === size
                    ? "bg-red-500 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Количество */}
        <div className="mb-6 flex items-center gap-4">
          <button
            className="text-xl font-bold border px-4 py-2"
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            className="text-xl font-bold border px-4 py-2"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* Кнопки действий */}
        <div className="flex items-center gap-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
            Buy Now
          </button>
          <button
            className={`p-3 rounded-lg border ${
              wishlist ? "text-red-500" : "text-gray-500"
            } hover:bg-gray-100`}
            onClick={handleAddToWishlist}
          >
            <FaHeart size={20} />
          </button>
        </div>

        {/* Условия доставки */}
        <div className="mt-6">
          <div className="flex items-center gap-4 border-t pt-4">
            <div>
              <h4 className="font-semibold">Free Delivery</h4>
              <p className="text-gray-500 text-sm">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t pt-4">
            <div>
              <h4 className="font-semibold">Return Delivery</h4>
              <p className="text-gray-500 text-sm">
                Free 30 Days Delivery Returns. <span>Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
