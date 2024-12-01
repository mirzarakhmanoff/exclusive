import qr from "../../assets/Qr Code.png";
import play from "../../assets/GooglePlay.png";
import store from "../../assets/AppStore.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full ">
      <div className="container  mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-6">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="p-2 bg-white text-black">&rarr;</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm mb-2">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="mb-4">
            <img src={qr} alt="QR Code" className="w-20 h-20 mx-auto" />
          </div>
          <div className="space-y-2">
            <img src={play} alt="Google Play" className="w-32" />
            <img src={store} alt="App Store" className="w-32" />
          </div>
          <div className="flex space-x-4 mt-4 justify-center">
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-lg hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          &copy; Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
