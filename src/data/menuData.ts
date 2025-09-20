export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  popularity: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export const menuItems: MenuItem[] = [
  // Starters (10 items)
{
  id: 1,
  name: "Paneer Tikka",
  description: "Cubes of paneer marinated in spices and grilled in a tandoor",
  price: 320,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  popularity: 9,
  isVegetarian: true,
  isSpicy:true
},
{
  id: 2,
  name: "Chicken Malai Tikka",
  description: "Creamy chicken marinated with cashew paste and grilled",
  price: 380,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  popularity: 8
},
{
  id: 3,
  name: "Hara Bhara Kabab",
  description: "Spinach and peas cutlets shallow fried till crisp",
  price: 280,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 4,
  name: "Fish Amritsari",
  description: "Basa fillets marinated with ajwain and deep fried",
  price: 420,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  popularity: 8
},
{
  id: 5,
  name: "Mutton Seekh Kebab",
  description: "Juicy minced mutton kebabs grilled on skewers",
  price: 450,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  popularity: 8
},
{
  id: 6,
  name: "Veg Spring Rolls",
  description: "Crispy rolls stuffed with vegetables and noodles",
  price: 240,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 7,
  name: "Tandoori Mushroom",
  description: "Button mushrooms marinated with spices and grilled",
  price: 300,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 8,
  name: "Chicken 65",
  description: "Spicy deep-fried chicken with South Indian masala",
  price: 360,
  category: "Starters",
  image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  popularity: 9,
  isSpicy: true
},
{
  id: 9,
  name: "Prawns Koliwada",
  description: "Fried prawns with Mumbai’s famous Koliwada masala",
  price: 480,
  category: "Starters",
  popularity: 8
},
{
  id: 10,
  name: "Aloo Tikki Chaat",
  description: "Crispy potato patties topped with chutneys and curd",
  price: 220,
  category: "Starters",
  isVegetarian: true,
  popularity: 7
},

// Main Course (15 items)
{
  id: 11,
  name: "Butter Chicken",
  description: "Creamy tomato gravy with succulent chicken pieces",
  price: 480,
  category: "Main Course",
  popularity: 10
},
{
  id: 12,
  name: "Paneer Butter Masala",
  description: "Cottage cheese cooked in rich butter-tomato gravy",
  price: 420,
  category: "Main Course",
  isVegetarian: true,
  popularity: 9
},
{
  id: 13,
  name: "Mutton Rogan Josh",
  description: "Slow-cooked Kashmiri style mutton curry",
  price: 560,
  category: "Main Course",
  popularity: 9
},
{
  id: 14,
  name: "Dal Makhani",
  description: "Creamy black lentils simmered overnight",
  price: 340,
  category: "Main Course",
  isVegetarian: true,
  popularity: 9
},
{
  id: 15,
  name: "Chicken Biryani",
  description: "Hyderabadi dum biryani with raita",
  price: 480,
  category: "Main Course",
  popularity: 10
},
{
  id: 16,
  name: "Veg Biryani",
  description: "Fragrant basmati rice cooked with spices and vegetables",
  price: 380,
  category: "Main Course",
  isVegetarian: true,
  popularity: 8
},
{
  id: 17,
  name: "Palak Paneer",
  description: "Paneer cubes cooked in creamy spinach gravy",
  price: 360,
  category: "Main Course",
  isVegetarian: true,
  popularity: 8
},
{
  id: 18,
  name: "Goan Fish Curry",
  description: "Tangy coconut-based curry with king fish",
  price: 520,
  category: "Main Course",
  popularity: 8
},
{
  id: 19,
  name: "Prawns Masala",
  description: "Spicy prawns cooked in onion-tomato masala",
  price: 550,
  category: "Main Course",
  popularity: 8
},
{
  id: 20,
  name: "Kadai Paneer",
  description: "Paneer cubes cooked with capsicum in kadai masala",
  price: 390,
  category: "Main Course",
  isVegetarian: true,
  popularity: 8
},
{
  id: 21,
  name: "Chicken Chettinad",
  description: "Fiery South Indian chicken curry",
  price: 500,
  category: "Main Course",
  popularity: 9,
  isSpicy: true
},
{
  id: 22,
  name: "Egg Curry",
  description: "Boiled eggs simmered in onion-tomato gravy",
  price: 320,
  category: "Main Course",
  popularity: 7
},
{
  id: 23,
  name: "Bhindi Masala",
  description: "Okra stir-fried with onions and spices",
  price: 280,
  category: "Main Course",
  isVegetarian: true,
  popularity: 7
},
{
  id: 24,
  name: "Lamb Vindaloo",
  description: "Goan-style spicy lamb curry with vinegar",
  price: 540,
  category: "Main Course",
  popularity: 8,
  isSpicy: true
},
{
  id: 25,
  name: "Chole Bhature",
  description: "Spicy chickpeas served with fried bhature",
  price: 260,
  category: "Main Course",
  isVegetarian: true,
  popularity: 9
},

// Beverages (10 items)
{
  id: 26,
  name: "Masala Chai",
  description: "Traditional Indian tea with spices",
  price: 60,
  category: "Beverages",
  popularity: 10
},
{
  id: 27,
  name: "Sweet Lassi",
  description: "Punjabi style yogurt-based drink",
  price: 120,
  category: "Beverages",
  popularity: 9
},
{
  id: 28,
  name: "Salted Buttermilk",
  description: "Chaas with roasted cumin and coriander",
  price: 90,
  category: "Beverages",
  popularity: 8
},
{
  id: 29,
  name: "Filter Coffee",
  description: "South Indian strong coffee served with froth",
  price: 80,
  category: "Beverages",
  popularity: 9
},
{
  id: 30,
  name: "Mango Lassi",
  description: "Refreshing mango flavored yogurt drink",
  price: 140,
  category: "Beverages",
  popularity: 9
},
{
  id: 31,
  name: "Tender Coconut Water",
  description: "Fresh coconut water served chilled",
  price: 100,
  category: "Beverages",
  popularity: 8
},
{
  id: 32,
  name: "Nimbu Pani",
  description: "Fresh lime water with sugar and salt",
  price: 70,
  category: "Beverages",
  popularity: 8
},
{
  id: 33,
  name: "Rose Sharbat",
  description: "Sweet rose flavored summer cooler",
  price: 110,
  category: "Beverages",
  popularity: 7
},
{
  id: 34,
  name: "Cold Coffee",
  description: "Chilled coffee with ice cream",
  price: 160,
  category: "Beverages",
  popularity: 8
},
{
  id: 35,
  name: "Jaljeera",
  description: "Tangy spiced cumin flavored drink",
  price: 80,
  category: "Beverages",
  popularity: 7
},

// Desserts (10 items)
{
  id: 36,
  name: "Gulab Jamun",
  description: "Soft khoya balls soaked in sugar syrup",
  price: 120,
  category: "Desserts",
  isVegetarian: true,
  popularity: 10
},
{
  id: 37,
  name: "Rasgulla",
  description: "Bengali sweet made with chenna and syrup",
  price: 130,
  category: "Desserts",
  isVegetarian: true,
  popularity: 9
},
{
  id: 38,
  name: "Rasmalai",
  description: "Chenna patties soaked in saffron milk",
  price: 160,
  category: "Desserts",
  isVegetarian: true,
  popularity: 9
},
{
  id: 39,
  name: "Jalebi",
  description: "Crispy fried coils soaked in sugar syrup",
  price: 100,
  category: "Desserts",
  isVegetarian: true,
  popularity: 8
},
{
  id: 40,
  name: "Kaju Katli",
  description: "Cashew fudge garnished with silver leaf",
  price: 220,
  category: "Desserts",
  isVegetarian: true,
  popularity: 9
},
{
  id: 41,
  name: "Kulfi Falooda",
  description: "Traditional kulfi with rose syrup and falooda sev",
  price: 180,
  category: "Desserts",
  isVegetarian: true,
  popularity: 8
},
{
  id: 42,
  name: "Moong Dal Halwa",
  description: "Rich halwa made with moong dal and ghee",
  price: 160,
  category: "Desserts",
  isVegetarian: true,
  popularity: 8
},
{
  id: 43,
  name: "Malpua with Rabri",
  description: "Sweet pancakes topped with rabri",
  price: 200,
  category: "Desserts",
  isVegetarian: true,
  popularity: 8
},
{
  id: 44,
  name: "Kesari Peda",
  description: "Saffron flavored milk peda",
  price: 150,
  category: "Desserts",
  isVegetarian: true,
  popularity: 7
},
{
  id: 45,
  name: "Ice Cream Sundae",
  description: "Scoop of ice cream with toppings",
  price: 180,
  category: "Desserts",
  isVegetarian: true,
  popularity: 8
},

// Salads (5 items)
{
  id: 46,
  name: "Kachumber Salad",
  description: "Finely chopped cucumber, onion, tomato with lemon",
  price: 120,
  category: "Salads",
  isVegetarian: true,
  popularity: 8
},
{
  id: 47,
  name: "Sprouts Salad",
  description: "Healthy sprouts with onion, tomato, and spices",
  price: 140,
  category: "Salads",
  isVegetarian: true,
  popularity: 7
},
{
  id: 48,
  name: "Aloo Chana Chaat",
  description: "Boiled potatoes and chickpeas tossed with spices",
  price: 150,
  category: "Salads",
  isVegetarian: true,
  popularity: 8
},
{
  id: 49,
  name: "Fruit Chaat",
  description: "Seasonal fruits tossed with masala",
  price: 160,
  category: "Salads",
  isVegetarian: true,
  popularity: 8
},
{
  id: 50,
  name: "Raita Selection",
  description: "Choice of boondi, cucumber or onion raita",
  price: 120,
  category: "Salads",
  isVegetarian: true,
  popularity: 8
}

];

// Menu images for gallery display
export const menuImages = [
  {
    id: 1,
    title: "Starters Menu",
    image: "https://burst.shopifycdn.com/photos/person-stands-on-rocks-poking-out-of-the-ocean-shoreline.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    category: "Starters"
  },
  {
    id: 2,
    title: "Main Course Delights",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Main Course"
  },
  {
    id: 3,
    title: "Refreshing Beverages",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Beverages"
  },
  {
    id: 4,
    title: "Sweet Desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Desserts"
  },
  {
    id: 5,
    title: "Fresh Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Salads"
  },
  {
    id: 6,
    title: "Chef's Special",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Special"
  }
];

export const categories = ["All", "Starters", "Main Course", "Beverages", "Desserts", "Salads"];

// Menu card images for physical menu display
export const menuCardImages = [
  {
    id: 1,
    title: "Menu Page 1",
    image: "https://burst.shopifycdn.com/photos/person-stands-on-rocks-poking-out-of-the-ocean-shoreline.jpg?width=1000&format=pjpg&exif=0&iptc=0L",
    description: "First page of our menu"
  },
  {
    id: 2,
    title: "Menu Page 2", 
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
    description: "Second page of our menu"
  },
  {
    id: 3,
    title: "Menu Page 3",
    image: "https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg", 
    description: "Third page of our menu"
  },
  {
    id: 4,
    title: "Menu Page 3",
    image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", 
    description: "Third page of our menu"
  }
  // Add as many menu card pages as you need
];