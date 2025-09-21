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
  image: "https://orders.popskitchen.in/storage/2024/09/image-358.png",
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
  image: "https://www.chilitochoc.com/wp-content/uploads/2022/11/chicken-malai-boti-with-green-chutney-1.jpg",
  popularity: 8
},
{
  id: 3,
  name: "Hara Bhara Kabab",
  description: "Spinach and peas cutlets shallow fried till crisp",
  price: 280,
  category: "Starters",
  image: "https://www.whiskaffair.com/wp-content/uploads/2019/03/Hara-Bhara-Kabab-2-3.jpg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 4,
  name: "Fish Amritsari",
  description: "Basa fillets marinated with ajwain and deep fried",
  price: 420,
  category: "Starters",
  image: "https://www.yummyoyummy.com/wp-content/uploads/2020/06/img_2580.jpg",
  popularity: 8
},
{
  id: 5,
  name: "Mutton Seekh Kebab",
  description: "Juicy minced mutton kebabs grilled on skewers",
  price: 450,
  category: "Starters",
  image: "https://cdn.fishry.com/product/MUTTON-SEEKH-KEBAB-1-33ee56f-chickentikkainn.jpg",
  popularity: 8
},
{
  id: 6,
  name: "Veg Spring Rolls",
  description: "Crispy rolls stuffed with vegetables and noodles",
  price: 240,
  category: "Starters",
  image: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Spring-Roll-Recipe.jpg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 7,
  name: "Tandoori Mushroom",
  description: "Button mushrooms marinated with spices and grilled",
  price: 300,
  category: "Starters",
  image: "https://cookingfromheart.com/wp-content/uploads/2017/02/Tandoori-Mushroom-Tikka-5.jpg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 8,
  name: "Chicken 65",
  description: "Spicy deep-fried chicken with South Indian masala",
  price: 360,
  category: "Starters",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style.jpg",
  popularity: 9,
  isSpicy: true
},
{
  id: 9,
  name: "Prawns Koliwada",
  description: "Fried prawns with Mumbai’s famous Koliwada masala",
  price: 480,
  category: "Starters",
  image:"https://vanitascorner.com/wp-content/uploads/2023/06/Prawns-koliwada-FB.jpg",
  popularity: 8
},
{
  id: 10,
  name: "Aloo Tikki Chaat",
  description: "Crispy potato patties topped with chutneys and curd",
  price: 220,
  category: "Starters",
  image:"https://sinfullyspicy.com/wp-content/uploads/2023/03/1-1.jpg",
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
  image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
  popularity: 10
},
{
  id: 12,
  name: "Paneer Butter Masala",
  description: "Cottage cheese cooked in rich butter-tomato gravy",
  price: 420,
  category: "Main Course",
  image: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg",
  isVegetarian: true,
  popularity: 9
},
{
  id: 13,
  name: "Mutton Rogan Josh",
  description: "Slow-cooked Kashmiri style mutton curry",
  price: 560,
  category: "Main Course",
  image: "https://www.whiskaffair.com/wp-content/uploads/2019/02/Mutton-Rogan-Josh-2-3.jpg",
  popularity: 9
},
{
  id: 14,
  name: "Dal Makhani",
  description: "Creamy black lentils simmered overnight",
  price: 340,
  category: "Main Course",
  image: "https://www.pureindianfoods.com/cdn/shop/articles/Dal-Makhani.webp?v=1753479167",
  isVegetarian: true,
  popularity: 9
},
{
  id: 15,
  name: "Chicken Biryani",
  description: "Hyderabadi dum biryani with raita",
  price: 480,
  category: "Main Course",
  image: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
  popularity: 10
},
{
  id: 16,
  name: "Veg Biryani",
  description: "Fragrant basmati rice cooked with spices and vegetables",
  price: 380,
  category: "Main Course",
  image: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2025/05/Veg-Kofta-Biryani-H1.jpg?fit=600%2C900&ssl=1",
  isVegetarian: true,
  popularity: 8
},
{
  id: 17,
  name: "Palak Paneer",
  description: "Paneer cubes cooked in creamy spinach gravy",
  price: 360,
  category: "Main Course",
  image: "https://www.whiskaffair.com/wp-content/uploads/2014/07/Palak-Paneer-2-1.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 18,
  name: "Goan Fish Curry",
  description: "Tangy coconut-based curry with king fish",
  price: 520,
  category: "Main Course",
  image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Goan-Fish-Curry.jpg",  
  popularity: 8
},
{
  id: 19,
  name: "Prawns Masala",
  description: "Spicy prawns cooked in onion-tomato masala",
  price: 550,
  category: "Main Course",
  image: "https://i0.wp.com/www.sinamontales.com/dotcord/uploads/2017/09/Easy-Prawn-Masala-Recipe.jpg?fit=1200%2C1600&ssl=1",
  popularity: 8
},
{
  id: 20,
  name: "Kadai Paneer",
  description: "Paneer cubes cooked with capsicum in kadai masala",
  price: 390,
  category: "Main Course",
  image: "https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 21,
  name: "Chicken Chettinad",
  description: "Fiery South Indian chicken curry",
  price: 500,
  category: "Main Course",
  image: "https://www.cookwithnabeela.com/wp-content/uploads/2024/03/ChickenChettinad.webp",
  popularity: 9,
  isSpicy: true
},
{
  id: 22,
  name: "Egg Curry",
  description: "Boiled eggs simmered in onion-tomato gravy",
  price: 320,
  category: "Main Course",
  image: "https://i0.wp.com/pistachiodoughnut.com/wp-content/uploads/2022/05/IMG_6770_jpg.jpg?resize=800%2C840&ssl=1",
  isVegetarian: false,
  popularity: 7
},
{
  id: 23,
  name: "Bhindi Masala",
  description: "Okra stir-fried with onions and spices",
  price: 280,
  category: "Main Course",
  image: "https://aromaticessence.co/wp-content/uploads/2022/06/punjabi_bhindi_masala_gravy_featured.jpg",  
  isVegetarian: true,
  popularity: 7
},
{
  id: 24,
  name: "Lamb Vindaloo",
  description: "Goan-style spicy lamb curry with vinegar",
  price: 540,
  category: "Main Course",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/lamb-vindaloo-recipe.jpg",  
  popularity: 8,
  isSpicy: true
},
{
  id: 25,
  name: "Chole Bhature",
  description: "Spicy chickpeas served with fried bhature",
  price: 260,
  category: "Main Course",
  image: "https://headbangerskitchen.com/wp-content/uploads/2024/03/BEEFCHOLE-H1.jpg",
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
  image: "https://www.thespicehouse.com/cdn/shop/articles/Chai_Masala_Tea_1200x1200.jpg?v=1606936195",
  popularity: 10
},
{
  id: 27,
  name: "Sweet Lassi",
  description: "Punjabi style yogurt-based drink",
  price: 120,
  category: "Beverages",
  image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/01/sweet-lassi-recipe-featured.jpg",
  popularity: 9
},
{
  id: 28,
  name: "Salted Buttermilk",
  description: "Chaas with roasted cumin and coriander",
  price: 90,
  category: "Beverages",
  image: "https://i.pinimg.com/564x/18/ee/03/18ee03c804a293fa4d8c9aa07605df2c.jpg",
  popularity: 8
},
{
  id: 29,
  name: "Filter Coffee",
  description: "South Indian strong coffee served with froth",
  price: 80,
  category: "Beverages",
  image: "https://truesouth.in/cdn/shop/files/southindian1.jpg?v=1707477021",
  popularity: 9
},
{
  id: 30,
  name: "Mango Lassi",
  description: "Refreshing mango flavored yogurt drink",
  price: 140,
  category: "Beverages",
  image: "https://shivanilovesfood.com/wp-content/uploads/2023/03/Healthy-Mango-Lassi-7.jpg",
  popularity: 9
},
{
  id: 31,
  name: "Tender Coconut Water",
  description: "Fresh coconut water served chilled",
  price: 100,
  category: "Beverages",
  image: "https://media.istockphoto.com/id/1413187059/photo/coconut-juice-drink-coconut-water.jpg?s=612x612&w=0&k=20&c=zAUxtvUMbi2KkiZJ_5yniChR0nWP4zOixrh6TcrUq5M=",
  popularity: 8
},
{
  id: 32,
  name: "Nimbu Pani",
  description: "Fresh lime water with sugar and salt",
  price: 70,
  category: "Beverages",
  image: "https://savournsip.com/wp-content/uploads/2024/05/Nimbu-pani.jpg",
  popularity: 8
},
{
  id: 33,
  name: "Rose Sharbat",
  description: "Sweet rose flavored summer cooler",
  price: 110,
  category: "Beverages",
  image: "https://www.mapro.com/cdn/shop/files/Rose-Sharbat-Recipes.png?v=1700807103&width=1500",
  popularity: 7
},
{
  id: 34,
  name: "Cold Coffee",
  description: "Chilled coffee with ice cream",
  price: 160,
  category: "Beverages",
  image: "https://www.spiceupthecurry.com/wp-content/uploads/2022/04/cold-coffee-1.jpg",
  popularity: 8
},
{
  id: 35,
  name: "Jaljeera",
  description: "Tangy spiced cumin flavored drink",
  price: 80,
  category: "Beverages",
  image: "https://www.ndtv.com/cooks/images/Iced.Jaljeera-620.jpg",
  popularity: 7
},

// Desserts (10 items)
{
  id: 36,
  name: "Gulab Jamun",
  description: "Soft khoya balls soaked in sugar syrup",
  price: 120,
  category: "Desserts",
  image: "https://talodfoods.com/cdn/shop/files/Gulab-Jamun-Creative_img_4f2bd570-4f11-4dba-8386-fa5a26392cd0.webp?v=1725262395&width=1500",
  isVegetarian: true,
  popularity: 10
},
{
  id: 37,
  name: "Rasgulla",
  description: "Bengali sweet made with chenna and syrup",
  price: 130,
  category: "Desserts",
  image: "https://www.chitalebandhu.in/cdn/shop/files/Rasgulla-Image-_3_grande.jpg?v=1697398551",
  isVegetarian: true,
  popularity: 9
},
{
  id: 38,
  name: "Rasmalai",
  description: "Chenna patties soaked in saffron milk",
  price: 160,
  category: "Desserts",
  image: "https://palatesdesire.com/wp-content/uploads/2022/09/Rasmalai-recipe@palates-desire.jpg",
  isVegetarian: true,
  popularity: 9
},
{
  id: 39,
  name: "Jalebi",
  description: "Crispy fried coils soaked in sugar syrup",
  price: 100,
  category: "Desserts",
  image: "https://sinfullyspicy.com/wp-content/uploads/2014/10/1200-by-1200-images-1.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 40,
  name: "Kaju Katli",
  description: "Cashew fudge garnished with silver leaf",
  price: 220,
  category: "Desserts",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Kaju_katli_sweet.jpg",
  isVegetarian: true,
  popularity: 9
},
{
  id: 41,
  name: "Kulfi Falooda",
  description: "Traditional kulfi with rose syrup and falooda sev",
  price: 180,
  category: "Desserts",
  image: "https://www.indikitchen.co/wp-content/uploads/2021/06/1689-026-e1625320826665.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 42,
  name: "Moong Dal Halwa",
  description: "Rich halwa made with moong dal and ghee",
  price: 160,
  category: "Desserts",
  image: "https://foodtrails25.com/wp-content/uploads/2019/10/How-to-make-Moong-Dal.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 43,
  name: "Malpua with Rabri",
  description: "Sweet pancakes topped with rabri",
  price: 200,
  category: "Desserts",
  image: "https://aayanshkitchen.com/wp-content/uploads/2025/03/IMG_2650.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 44,
  name: "Kesari Peda",
  description: "Saffron flavored milk peda",
  price: 150,
  category: "Desserts",
  image: "https://www.agarwalbhavansweets.com/cdn/shop/files/KESARPEDA.png?v=1711618173",
  isVegetarian: true,
  popularity: 7
},
{
  id: 45,
  name: "Ice Cream Sundae",
  description: "Scoop of ice cream with toppings",
  price: 180,
  category: "Desserts",
  image: "https://assets.rbl.ms/21919567/origin.jpg",
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
  image: "https://www.jcookingodyssey.com/wp-content/uploads/2025/07/kachumber-salad.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 47,
  name: "Sprouts Salad",
  description: "Healthy sprouts with onion, tomato, and spices",
  price: 140,
  category: "Salads",
  image: "https://www.whiskaffair.com/wp-content/uploads/2020/04/Sprouts-Salad-3.jpg",
  isVegetarian: true,
  popularity: 7
},
{
  id: 48,
  name: "Aloo Chana Chaat",
  description: "Boiled potatoes and chickpeas tossed with spices",
  price: 150,
  category: "Salads",
  image: "https://www.cookwithkushi.com/wp-content/uploads/2019/07/aloo_chana_chaat_vegan_chickpea_potato_salad_recipe.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 49,
  name: "Fruit Chaat",
  description: "Seasonal fruits tossed with masala",
  price: 160,
  category: "Salads",
  image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/11/fruit-chaat-featured.jpg",
  isVegetarian: true,
  popularity: 8
},
{
  id: 50,
  name: "Raita Selection",
  description: "Choice of boondi, cucumber or onion raita",
  price: 120,
  category: "Salads",
  image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/raita-recipe.webp",
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
    image: "https://5.imimg.com/data5/SL/BC/RY/SELLER-54701692/menu-card-printing-service.jpeg",
    description: "First page of our menu"
  },
  {
    id: 2,
    title: "Menu Page 2", 
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/daily-food-menu-card-for-restaurant-design-template-343e412e422270069dfee41a4c816970_screen.jpg?ts=1733990582",
    description: "Second page of our menu"
  },
  {
    id: 3,
    title: "Menu Page 3",
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708445862/catalog/1544703271697907712/bbilfpwxkpoybhhxwhfr.webp", 
    description: "Third page of our menu"
  },
  {
    id: 4,
    title: "Menu Page 3",
    image: "https://img.pikbest.com/templates/20240711/food-menu-card-template-design-for-restaurants-design_10662181.jpg!w700wp", 
    description: "Third page of our menu"
  }
  // Add as many menu card pages as you need
];