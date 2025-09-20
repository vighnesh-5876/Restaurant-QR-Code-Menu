import React from 'react';
import { Search, Filter, SortAsc, ShoppingCart, FileText } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onOpenFilter: () => void;
  onOpenSort: () => void;
  onOpenPDFMenu: () => void;
  cartItemsCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  onOpenFilter,
  onOpenSort,
  onOpenPDFMenu,
  cartItemsCount,
  onOpenCart,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          {/* Logo and Title */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bella Vista
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-1">Fine Dining Experience</p>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={onOpenFilter}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 active:scale-95"
              >
                <Filter className="h-5 w-5" />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <button
                onClick={onOpenSort}
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 active:scale-95"
              >
                <SortAsc className="h-5 w-5" />
                <span className="hidden sm:inline">Sort</span>
              </button>
              <button
                onClick={onOpenPDFMenu}
                className="flex items-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-600 rounded-xl transition-all duration-300 active:scale-95"
              >
                <FileText className="h-5 w-5" />
                <span className="hidden sm:inline">Menu</span>
              </button>
              <button
                onClick={onOpenCart}
                className="relative flex items-center gap-2 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl transition-all duration-300 active:scale-95"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};