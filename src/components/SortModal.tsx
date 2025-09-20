import React from 'react';
import { X, ArrowUpDown, ArrowUp, ArrowDown, Star } from 'lucide-react';

interface SortModalProps {
  isOpen: boolean;
  onClose: () => void;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

export const SortModal: React.FC<SortModalProps> = ({
  isOpen,
  onClose,
  sortBy,
  sortOrder,
  onSortChange
}) => {
  if (!isOpen) return null;

  const sortOptions = [
    { key: 'name', label: 'Name', icon: ArrowUpDown },
    { key: 'price', label: 'Price', icon: ArrowUpDown },
    { key: 'popularity', label: 'Popularity', icon: Star },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative bg-white rounded-2xl p-4 sm:p-6 w-full max-w-sm shadow-2xl">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Sort Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="space-y-2 sm:space-y-3">
            {sortOptions.map((option) => (
              <div key={option.key} className="space-y-1 sm:space-y-2">
                <div className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                  <option.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {option.label}
                </div>
                <div className="ml-6 sm:ml-8 flex gap-1 sm:gap-2">
                  <button
                    onClick={() => onSortChange(option.key, 'asc')}
                    className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
                      sortBy === option.key && sortOrder === 'asc'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    {option.key === 'name' ? 'A-Z' : option.key === 'price' ? 'Low-High' : 'Low-High'}
                  </button>
                  <button
                    onClick={() => onSortChange(option.key, 'desc')}
                    className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 ${
                      sortBy === option.key && sortOrder === 'desc'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
                    {option.key === 'name' ? 'Z-A' : option.key === 'price' ? 'High-Low' : 'High-Low'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 sm:mt-6 py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
          >
            Apply Sort
          </button>
        </div>
      </div>
    </div>
  );
};