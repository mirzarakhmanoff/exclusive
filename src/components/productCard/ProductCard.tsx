import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slice/wishlist-slice";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/cart-slice";
import { useLikePhoneMutation } from "../../redux/api/cart-api";

const ProductCard = ({ products }: any) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: any) => state.wishlist.value);
  const [likePhone] = useLikePhoneMutation();

  const isInWishlist = (productId: string) => {
    return wishlist.some((item: any) => item.id === productId);
  };

  const handleLike = (productId: string) => {
    dispatch(toggleWishlist(productId));
    likePhone(productId);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {products?.map((product: any) => (
        <div
          key={product.id}
          className="relative cursor-pointer bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          {/* Label "NEW" */}
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
              NEW
            </span>
          )}

          {/* Кнопки "Wishlist" и "View" */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {/* Wishlist Button */}
            <button
              onClick={() => handleLike(product.id)}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <FaHeart
                className={`${
                  isInWishlist(product.id) ? "text-red-500" : "text-gray-600"
                } hover:text-red-500`}
                size={18}
              />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FaEye className="text-gray-600 hover:text-blue-500" size={18} />
            </button>
          </div>

          {/* Картинка товара */}
          <Link to={`/product/${product.id}`}>
            <div className="relative">
              <img
                src={product.url}
                alt={product.title}
                className="w-full h-56 object-contain bg-gray-100"
              />
            </div>
          </Link>

          {/* Информация о товаре */}
          <div className="p-6">
            <h3 className="text-base font-semibold text-gray-800 truncate mb-2">
              {product.title}
            </h3>
            <div className="text-red-500 font-bold text-lg mb-3">
              ${product.price}
            </div>
            <div className="flex items-center">
              <span className="text-yellow-500 text-sm">
                {"★".repeat(Math.floor(5))}
                {"☆".repeat(5 - Math.floor(5))}
              </span>
              <span className="text-gray-400 text-xs ml-2">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Иконка добавления в корзину */}
          <div className="absolute bottom-4 left-[200px] transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                console.log(product);
              }}
            >
              <FaShoppingCart
                className="text-gray-600 hover:text-green-500"
                size={18}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
