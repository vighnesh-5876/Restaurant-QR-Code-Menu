import React, { useState } from 'react';
import { ShoppingCart, Flame, Leaf } from 'lucide-react';
import { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  isInCart: boolean;
  onAddToCart: (item: MenuItemType) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isInCart,
  onAddToCart
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      {item.image && !imageError ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(item)}
            className="absolute top-3 right-3 p-2 rounded-full transition-all duration-300 bg-white/80 text-gray-600 hover:bg-blue-500 hover:text-white backdrop-blur-sm shadow-lg hover:shadow-xl active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {item.isVegetarian && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <Leaf className="h-3 w-3" />
                Veg
              </span>
            )}
            {item.isSpicy && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <Flame className="h-3 w-3" />
                Spicy
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
          <div className="text-gray-400 text-center">
            <div className="text-6xl mb-2">🍽️</div>
            <p className="text-sm">No image available</p>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(item)}
            className="absolute top-3 right-3 p-2 rounded-full transition-all duration-300 bg-white text-gray-600 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-xl active:scale-95"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {item.isVegetarian && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <Leaf className="h-3 w-3" />
                Veg
              </span>
            )}
            {item.isSpicy && (
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <Flame className="h-3 w-3" />
                Spicy
              </span>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {item.name}
          </h3>
          <div className="text-right">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ₹{item.price}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
              {item.category}
            </span>
            {isInCart && (
              <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full flex items-center gap-1">
                <ShoppingCart className="h-3 w-3" />
                In Cart
              </span>
            )}
          </div>
          
          {/* Popularity Stars */}
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs sm:text-sm ${
                  i < Math.floor(item.popularity / 2)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              >
                ⭐
              </span>
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({item.popularity}/10)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};