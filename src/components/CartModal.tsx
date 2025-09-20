import React from 'react';
import { X, ShoppingCart, Trash2, Minus, Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface CartItem extends MenuItemType {
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveFromCart: (id: number) => void;
  onClearCart: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveFromCart,
  onClearCart,
  onUpdateQuantity,
}) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-2 sm:p-4">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] sm:max-h-[80vh] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3">
              <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Menu Cart</h2>
              {totalItems > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  {totalItems} item{totalItems !== 1 ? 's' : ''}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <ShoppingCart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
                  Add some delicious items from our menu!
                </p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  >
                    {/* Item Image */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl sm:text-2xl">
                          🍽️
                        </div>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate text-sm sm:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-base sm:text-lg font-bold text-blue-600">
                          ₹{item.price}
                        </span>
                        <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="p-1.5 sm:p-1 hover:bg-gray-200 rounded-full transition-colors duration-200 touch-manipulation"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="w-6 sm:w-8 text-center font-semibold text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1.5 sm:p-1 hover:bg-gray-200 rounded-full transition-colors duration-200 touch-manipulation"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200 touch-manipulation"
                      title="Remove from cart"
                    >
                      <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-4 sm:p-6">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-gray-800">Total:</span>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ₹{totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={onClearCart}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base touch-manipulation"
                >
                  <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  Clear Cart
                </button>
                <button
                  onClick={() => {
                    // Here you would typically handle checkout
                    alert(
                      `Proceeding to checkout with ${totalItems} items totaling ₹ ${totalPrice.toFixed(
                        2
                      )}`
                    );
                  }}
                  className="flex-2 py-2.5 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base touch-manipulation"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
