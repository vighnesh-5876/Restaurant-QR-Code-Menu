import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuItem } from './components/MenuItem';
import { FilterModal } from './components/FilterModal';
import { SortModal } from './components/SortModal';
import { CartModal } from './components/CartModal';
import { PDFMenuModal } from './components/PDFMenuModal';
import { ContactFormModal } from './components/ContactFormModal';
import { BackToTop } from './components/BackToTop';
import { menuItems } from './data/menuData';
import type { MenuItem as MenuItemType } from './data/menuData';

interface CartItem extends MenuItemType {
  quantity: number;
}

function App() {
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  
  // Sort states
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  // Modal states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPDFMenuOpen, setIsPDFMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Auto-popup contact form on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setIsContactFormOpen(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  // Filter and sort logic
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter((item) => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      
      // Price filter
      const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
      
      // Vegetarian filter
      const matchesVegetarian = !showVegetarianOnly || item.isVegetarian;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesVegetarian;
    });

    // Sort logic
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'popularity':
          comparison = a.popularity - b.popularity;
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [searchTerm, activeCategory, priceRange, showVegetarianOnly, sortBy, sortOrder]);

  const handleAddToCart = (item: MenuItemType) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSortChange = (newSortBy: string, newSortOrder: 'asc' | 'desc') => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setIsSortOpen(false);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenFilter={() => setIsFilterOpen(true)}
        onOpenSort={() => setIsSortOpen(true)}
        onOpenPDFMenu={() => setIsPDFMenuOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/* Results Info */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                {activeCategory === 'All' ? 'All Menu Items' : activeCategory}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {filteredAndSortedItems.length} item{filteredAndSortedItems.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {totalCartItems > 0 && (
              <div className="text-xs sm:text-sm text-blue-600 bg-blue-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
                {totalCartItems} item{totalCartItems !== 1 ? 's' : ''} in cart
              </div>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredAndSortedItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredAndSortedItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                <MenuItem
                  item={item}
                  isInCart={cartItems.some(cartItem => cartItem.id === item.id)}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
                setPriceRange([0, 2000]);
                setShowVegetarianOnly(false);
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </main>

      {/* Modals */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategory={activeCategory}
        priceRange={priceRange}
        onCategoryChange={setActiveCategory}
        onPriceRangeChange={setPriceRange}
        showVegetarianOnly={showVegetarianOnly}
        onVegetarianToggle={setShowVegetarianOnly}
      />
      
      <SortModal
        isOpen={isSortOpen}
        onClose={() => setIsSortOpen(false)}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <PDFMenuModal
        isOpen={isPDFMenuOpen}
        onClose={() => setIsPDFMenuOpen(false)}
      />

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      <BackToTop />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-12 sm:mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bella Vista</h3>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
            Experience the finest dining with our carefully curated menu
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <span>📍 123 Fine Dining St, Culinary District</span>
            <span>📞 (555) 123-4567</span>
            <span>✉️ info@bellavista.com</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;