import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { menuCardImages } from '../data/menuData';

interface PDFMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFMenuModal: React.FC<PDFMenuModalProps> = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === menuCardImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menuCardImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-white">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Menu Card</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Carousel Content */}
        <div className="relative bg-gray-50">
          {/* Main Image Display */}
          <div className="relative h-[70vh] sm:h-[75vh] flex items-center justify-center overflow-hidden">
            {menuCardImages.length > 0 && (
              <div className="w-full h-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={menuCardImages[currentIndex].image}
                  alt={menuCardImages[currentIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
                  }}
                />
              </div>
            )}

            {/* Navigation Arrows */}
            {menuCardImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Counter */}
            {menuCardImages.length > 1 && (
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black bg-opacity-60 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {currentIndex + 1} / {menuCardImages.length}
              </div>
            )}
          </div>

          {/* Carousel Indicators */}
          {menuCardImages.length > 1 && (
            <div className="flex justify-center space-x-2 py-3 sm:py-4 bg-white">
              {menuCardImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {menuCardImages.length === 0 && (
            <div className="h-[70vh] sm:h-[75vh] flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-gray-500 text-base sm:text-lg mb-4">No menu card images available.</p>
                <p className="text-gray-400 text-sm">
                  Add images to the menuCardImages array in menuData.ts
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};