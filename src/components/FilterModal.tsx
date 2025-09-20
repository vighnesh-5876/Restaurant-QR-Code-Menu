import React from 'react';
import { X } from 'lucide-react';
import { categories } from '../data/menuData';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  showVegetarianOnly: boolean;
  onVegetarianToggle: (show: boolean) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceRangeChange,
  showVegetarianOnly,
  onVegetarianToggle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-white rounded-2xl p-4 sm:p-6 w-full max-w-md shadow-2xl">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Category</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`p-2 sm:p-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onPriceRangeChange([0, 500])}
                    className={`p-2 rounded-lg text-xs sm:text-sm transition-all ${
                      priceRange[1] <= 25 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    ₹0-500
                  </button>
                  <button
                    onClick={() => onPriceRangeChange([0, 1000])}
                    className={`p-2 rounded-lg text-xs sm:text-sm transition-all ${
                      priceRange[1] <= 50 && priceRange[1] > 25 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    ₹500-1000
                  </button>
                  <button
                    onClick={() => onPriceRangeChange([0, 2000])}
                    className={`p-2 rounded-lg text-xs sm:text-sm transition-all ${
                      priceRange[1] > 50 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    ₹2000+
                  </button>
                </div>
              </div>
            </div>

            {/* Dietary Preferences */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">Dietary Preferences</h3>
              <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showVegetarianOnly}
                  onChange={(e) => onVegetarianToggle(e.target.checked)}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-sm sm:text-base text-gray-700">Vegetarian only</span>
              </label>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex gap-2 sm:gap-3">
            <button
              onClick={() => {
                onCategoryChange('All');
                onPriceRangeChange([0, 2000]);
                onVegetarianToggle(false);
              }}
              className="flex-1 py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};