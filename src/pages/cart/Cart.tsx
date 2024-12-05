import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/slice/cart-slice";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state?.cart?.items);
  console.log(cartItems);

  const calculateTotal = () =>
    cartItems?.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems?.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Start shopping!</p>
      ) : (
        <>
          <div className="flex flex-col gap-6">
            {cartItems?.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.url || "https://via.placeholder.com/100"}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    className="text-xl font-bold border px-3 py-1"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="text-xl font-bold border px-3 py-1"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <button
                className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
            <div className="text-2xl font-bold">
              Total: ${calculateTotal()?.toFixed(2)}
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
