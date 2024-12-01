import { FaApple } from "react-icons/fa";
import phone from "../../assets/phone.png";
function Hero() {
  return (
    <div className="w-full flex items-center justify-between bg-black px-8 py-16">
      <div className="text-white max-w-md">
        <span className="flex items-center text-lg font-medium mb-2">
          <FaApple className="text-2xl mr-2" /> iPhone 14 Series
        </span>
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          Up to <span className="text-red-500">10% off</span> Voucher
        </h2>
        <button className="mt-4 px-6 py-3 bg-red-500 text-white rounded-full font-semibold shadow-lg hover:bg-red-600 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="max-w-md">
        <img src={phone} alt="iPhone 14 Series" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
