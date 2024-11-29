import shop from "../../assets/shoplogin.png";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-blue-50 flex justify-center items-center">
        <img
          src={shop}
          alt="Shopping cart and phone"
          className="w-3/4 h-auto"
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-white">
        <div className="max-w-sm w-full px-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Log in to Exclusive
          </h2>
          <p className="text-gray-500 mb-6">Enter your details below</p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-1"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email or phone"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Log In
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-red-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
