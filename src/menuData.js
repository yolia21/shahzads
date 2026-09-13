export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Items', icon: 'fa-utensils' },
  { id: 'platters', name: 'Platters & Kababs', icon: 'fa-drumstick-bite' },
  { id: 'burgers', name: 'Burgers & Sandwiches', icon: 'fa-burger' },
  { id: 'gyros', name: 'Gyros & Pita', icon: 'fa-bread-slice' },
  { id: 'wings', name: 'Chicken Wings', icon: 'fa-fire-burner' },
  { id: 'cheesesteaks', name: 'Cheesesteaks', icon: 'fa-cheese' },
  { id: 'salads', name: 'Make Your Own Salad', icon: 'fa-leaf' },
  { id: 'sides', name: 'Side Orders', icon: 'fa-french-fries' },
  { id: 'desserts', name: 'Desserts & Drinks', icon: 'fa-cookie-bite' },
  { id: 'sauces', name: 'Shahzad Sauces', icon: 'fa-bottle-droplet' },
];

export const SAUCES_LIST = [
  { id: 'white', name: 'Shahzad White Sauce', desc: 'Creamy garlic sauce, signature house recipe', isIncluded: true },
  { id: 'hot', name: 'Fiery Hot Sauce', desc: 'Spicy chili sauce with kick', isIncluded: true },
  { id: 'green', name: 'Green Chili Chutney', desc: 'Fresh mint, cilantro & green chili twist', isIncluded: true },
  { id: 'bbq', name: 'Smoky BBQ Sauce', desc: 'Rich & sweet BBQ glaze', isIncluded: true },
  { id: 'tahini', name: 'Authentic Tahini', desc: 'Nutty toasted sesame sauce', isIncluded: true },
  { id: 'sourcream', name: 'Cool Sour Cream', desc: 'Smooth & rich sour cream', isIncluded: true },
];

export const MENU_ITEMS = [
  // --- BURGERS & SANDWICHES ---
  {
    id: 'b1',
    name: 'Cheeseburger',
    category: 'burgers',
    price: 6.99,
    comboPrice: 10.99,
    description: 'Juicy beef patty topped with melted cheese, fresh lettuce, tomato, pickles & signature sauce.',
    hasCombo: true,
    tags: ['Popular', 'Beef']
  },
  {
    id: 'b2',
    name: 'Double Cheeseburger',
    category: 'burgers',
    price: 9.99,
    comboPrice: 13.99,
    description: 'Double juicy beef patties, double melted cheese, lettuce, tomato & house sauce on a toasted bun.',
    hasCombo: true,
    tags: ['Bestseller', 'Heavy Hit']
  },
  {
    id: 'b3',
    name: 'Chicken Sandwich',
    category: 'burgers',
    price: 6.99,
    comboPrice: 10.99,
    description: 'Tender seasoned chicken patty served with mayo, lettuce & tomato.',
    hasCombo: true,
    tags: ['Chicken']
  },
  {
    id: 'b4',
    name: 'Crispy Chicken Sandwich',
    category: 'burgers',
    price: 7.99,
    comboPrice: 11.99,
    description: 'Extra golden crispy fried chicken breast with pickles & special garlic white sauce.',
    hasCombo: true,
    tags: ['Crispy', 'Popular']
  },
  {
    id: 'b5',
    name: 'Spicy Chicken Sandwich',
    category: 'burgers',
    price: 7.99,
    comboPrice: 11.99,
    description: 'Fiery spicy fried chicken breast topped with jalapeños & hot sauce crunch.',
    hasCombo: true,
    tags: ['Spicy 🔥']
  },
  {
    id: 'b6',
    name: 'Grilled Chicken Sandwich',
    category: 'burgers',
    price: 7.50,
    comboPrice: 11.50,
    description: 'Flame-grilled marinated chicken breast served with lettuce, tomato & white sauce.',
    hasCombo: true,
    tags: ['Healthy Choice']
  },
  {
    id: 'b7',
    name: 'Fish Sandwich',
    category: 'burgers',
    price: 6.99,
    comboPrice: 10.99,
    description: 'Crispy golden fish fillet with tartar sauce and crisp lettuce on a toasted bun.',
    hasCombo: true,
    tags: ['Seafood']
  },
  {
    id: 'b8',
    name: 'Veggie Burger',
    category: 'burgers',
    price: 6.99,
    comboPrice: 10.99,
    description: 'Flavor-packed veggie patty loaded with fresh lettuce, tomatoes & tahini/white sauce.',
    hasCombo: true,
    tags: ['Vegetarian 🌿']
  },

  // --- CHEESESTEAKS ---
  {
    id: 'cs1',
    name: 'Cheesesteak',
    category: 'cheesesteaks',
    price: 10.99,
    comboPrice: 14.99,
    description: 'Thinly sliced tender steak grilled with melted cheese, onions & peppers on a warm hoagie roll.',
    hasCombo: true,
    tags: ['Top Tier', 'Customer Fav']
  },
  {
    id: 'cs2',
    name: 'Chicken Cheesesteak',
    category: 'cheesesteaks',
    price: 10.99,
    comboPrice: 14.99,
    description: 'Chopped seasoned chicken steak melted with American cheese, sautéed onions & peppers.',
    hasCombo: true,
    tags: ['Popular']
  },

  // --- CHICKEN WINGS ---
  {
    id: 'w1',
    name: 'Chicken Wings',
    category: 'wings',
    price: 9.99,
    description: 'Crispy jumbo wings tossed in choice of flavor: Buffalo, Hot, Lemon Pepper, Sweet Rage Chili, Honey Hot, Mango Habanero, Honey BBQ.',
    sizesText: '6 Pcs ($9.99) • 12 Pcs ($17.99) • 18 Pcs ($26.99) • 21 Pcs ($31.99)',
    flavorsText: 'Buffalo • Hot • Lemon Pepper • Sweet Rage Chili • Honey Hot • Mango Habanero • Honey BBQ',
    tags: ['Bestseller', 'Late Night']
  },

  // --- PLATTERS & KABAB PLATTERS ---
  {
    id: 'p1',
    name: 'Chicken Over Rice',
    category: 'platters',
    price: 12.99,
    description: 'Shahzad’s legendary chopped marinated chicken over basmati rice (Regular or Spicy), side salad & white/hot sauce.',
    tags: ['#1 Bestseller', 'Famous']
  },
  {
    id: 'p2',
    name: 'Lamb Over Rice',
    category: 'platters',
    price: 12.99,
    description: 'Tender juicy lamb gyro meat served over basmati rice, fresh garden salad & white/hot sauce.',
    tags: ['Popular']
  },
  {
    id: 'p3',
    name: 'Combo Over Rice',
    category: 'platters',
    price: 13.99,
    description: 'The ultimate feast! Half Chicken & Half Lamb over basmati rice with salad & signature sauces.',
    tags: ['Most Popular 🔥', 'Chef Recommendation']
  },
  {
    id: 'p4',
    name: '2 Pcs Fish Over Rice',
    category: 'platters',
    price: 11.99,
    description: 'Two crispy golden fish fillets served over basmati rice with side salad and white/hot sauce.',
    tags: ['Seafood']
  },
  {
    id: 'p5',
    name: 'Chicken Chapli Over Rice',
    category: 'platters',
    price: 11.99,
    description: 'Authentic spiced chicken chapli patties flame-grilled over basmati rice with salad and chutney.',
    tags: ['Authentic']
  },
  {
    id: 'p6',
    name: 'Falafel Over Rice',
    category: 'platters',
    price: 11.99,
    description: 'Golden crispy falafel balls over basmati rice with garden salad, chickpeas & tahini/white sauce.',
    tags: ['Vegetarian 🌿']
  },
  {
    id: 'p7',
    name: 'Beef Chapli Over Rice',
    category: 'platters',
    price: 13.99,
    description: 'Traditional spiced minced beef chapli kabab grilled to perfection over basmati rice.',
    tags: ['Specialty']
  },
  {
    id: 'p8',
    name: 'Mix Chapli Over Rice',
    category: 'platters',
    price: 14.99,
    description: 'Combination of spiced Chicken Chapli & Beef Chapli kababs over fragrant rice with salad.',
    tags: ['Feast']
  },
  {
    id: 'p9',
    name: 'Chicken Kofta Over Rice',
    category: 'platters',
    price: 13.99,
    description: 'Seasoned minced chicken skewers grilled over open flame, served over rice with side salad & sauce.',
    tags: ['Kabab Specialty']
  },
  {
    id: 'p10',
    name: 'Afghan Qabuli Pulao',
    category: 'platters',
    price: 19.99,
    description: 'Traditional Afghan festive rice dish served with tender seasoned meat, sweet raisins & carrots.',
    tags: ['Royal Specialty 🌟']
  },

  // --- GYROS & PITA ---
  {
    id: 'g1',
    name: 'Chicken Gyro',
    category: 'gyros',
    price: 9.99,
    comboPrice: 14.99,
    description: 'Chopped grilled chicken wrapped in fresh pita with lettuce, tomatoes, onions & white sauce.',
    hasCombo: true,
    tags: ['Popular']
  },
  {
    id: 'g2',
    name: 'Lamb Gyro',
    category: 'gyros',
    price: 9.99,
    comboPrice: 14.99,
    description: 'Juicy sliced lamb gyro meat wrapped in warm pita bread with fresh salad & white sauce.',
    hasCombo: true,
    tags: ['Classic']
  },
  {
    id: 'g3',
    name: 'Combo Gyro',
    category: 'gyros',
    price: 10.99,
    comboPrice: 15.99,
    description: 'Both grilled chicken and sliced lamb stuffed into warm pita with salad and signature sauces.',
    hasCombo: true,
    tags: ['Bestseller 🔥']
  },
  {
    id: 'g4',
    name: 'Beef Chapli Gyro',
    category: 'gyros',
    price: 10.99,
    comboPrice: 15.99,
    description: 'Spiced beef chapli patty wrapped in warm pita bread with lettuce, tomatoes & green chutney.',
    hasCombo: true,
    tags: ['Authentic']
  },
  {
    id: 'g5',
    name: 'Falafel Gyro',
    category: 'gyros',
    price: 9.99,
    comboPrice: 14.99,
    description: 'Crispy chickpea falafel patties wrapped in pita with fresh veggies & smooth tahini/white sauce.',
    hasCombo: true,
    tags: ['Vegetarian 🌿']
  },
  {
    id: 'g6',
    name: '2 Pcs Fish On Pita',
    category: 'gyros',
    price: 9.99,
    comboPrice: 14.99,
    description: 'Golden fried fish fillets tucked inside pita bread with fresh lettuce, onions & sauce.',
    hasCombo: true,
    tags: ['Seafood']
  },
  {
    id: 'g7',
    name: 'Chicken Chapli Gyro',
    category: 'gyros',
    price: 10.99,
    comboPrice: 15.99,
    description: 'Seasoned chicken chapli patty served in fresh pita with salad and white sauce.',
    hasCombo: true,
    tags: ['Flavorful']
  },
  {
    id: 'g8',
    name: 'Mixed Chapli Gyro',
    category: 'gyros',
    price: 11.99,
    comboPrice: 16.99,
    description: 'Double patty chapli gyro (Chicken + Beef) wrapped in pita bread loaded with toppings.',
    hasCombo: true,
    tags: ['Heavy Loaded']
  },
  {
    id: 'g9',
    name: 'Kofta Gyro',
    category: 'gyros',
    price: 9.99,
    comboPrice: 14.99,
    description: 'Grilled chicken kofta kabab served inside warm pita bread with crisp salad & garlic sauce.',
    hasCombo: true,
    tags: ['Kabab Wrap']
  },

  // --- MAKE YOUR OWN SALAD ---
  {
    id: 'sal1',
    name: 'Make Your Own Salad Bowl',
    category: 'salads',
    price: 11.99,
    description: 'Custom Mediterranean salad bowl. Proteins: Fish ($11.99), Chicken ($12.99), Lamb ($12.99), Falafel ($12.99), Chicken Kofta ($13.99), Combo ($13.99). Includes 8 Toppings: Lettuce, Tomato, Cucumber, Onion, Salata, Chickpeas, Peppers & Onions, Black Beans.',
    tags: ['Custom Build', 'Healthy']
  },

  // --- SIDE ORDERS ---
  {
    id: 's1',
    name: 'Fries',
    category: 'sides',
    price: 3.99,
    sizesText: 'Small: $3.99 / Large: $5.99',
    description: 'Golden, crispy salted fries.',
    tags: ['Classic']
  },
  {
    id: 's2',
    name: 'Onion Rings',
    category: 'sides',
    price: 4.99,
    sizesText: 'Small: $4.99 / Large: $6.99',
    description: 'Crispy battered onion rings fried to perfection.',
    tags: ['Crispy']
  },
  {
    id: 's3',
    name: 'Falafel Balls',
    category: 'sides',
    price: 5.99,
    sizesText: '4 Pcs: $5.99 / 8 Pcs: $9.99',
    description: 'House-made crispy spiced chickpea falafel balls served with tahini.',
    tags: ['Vegetarian 🌿']
  },
  {
    id: 's4',
    name: 'Masala Fries',
    category: 'sides',
    price: 4.99,
    sizesText: 'Small: $4.99 / Large: $6.99',
    description: 'Crispy fries tossed in Shahzad spicy South Asian seasoning mix.',
    tags: ['Spicy 🔥', 'Fan Fav']
  },
  {
    id: 's5',
    name: 'Curly Fries',
    category: 'sides',
    price: 4.99,
    sizesText: 'Small: $4.99 / Large: $6.99',
    description: 'Seasoned spiral curly fries.',
    tags: ['Popular']
  },
  {
    id: 's6',
    name: 'Waffle Fries',
    category: 'sides',
    price: 4.99,
    sizesText: 'Small: $4.99 / Large: $6.99',
    description: 'Crispy lattice waffle cut potatoes.',
    tags: ['Crispy']
  },
  {
    id: 's7',
    name: '6 Pcs Mozzarella Sticks',
    category: 'sides',
    price: 4.99,
    description: 'Gooey melted mozzarella cheese inside a crispy breaded coating.',
    tags: ['Cheesy']
  },
  {
    id: 's8',
    name: '6 Pcs Chicken Nuggets',
    category: 'sides',
    price: 4.99,
    description: 'Bite-sized golden crispy chicken nuggets.',
    tags: ['Kids Fav']
  },
  {
    id: 's9',
    name: 'Chicken Tenders',
    category: 'sides',
    price: 5.99,
    sizesText: '3 Pcs: $5.99 / 6 Pcs: $8.99',
    description: 'Crispy hand-breaded chicken breast tenders.',
    tags: ['Crispy']
  },
  {
    id: 's10',
    name: 'Pita Bread',
    category: 'sides',
    price: 1.99,
    description: 'Freshly warmed pita bread slice.',
    tags: ['Bread']
  },

  // --- DESSERTS & DRINKS ---
  {
    id: 'd1',
    name: 'Cheese Cake',
    category: 'desserts',
    price: 3.49,
    description: 'Classic creamy New York style cheesecake slice.',
    tags: ['Sweet']
  },
  {
    id: 'd2',
    name: 'Chocolate Cake',
    category: 'desserts',
    price: 3.99,
    description: 'Rich decadent multi-layer chocolate cake.',
    tags: ['Sweet']
  },
  {
    id: 'd3',
    name: 'Red Velvet Cake',
    category: 'desserts',
    price: 3.99,
    description: 'Moist red velvet slice with cream cheese frosting.',
    tags: ['Sweet']
  },
  {
    id: 'd4',
    name: 'Gulab Jamun',
    category: 'desserts',
    price: 5.99,
    description: 'Warm, soft milk dumplings soaked in rose cardamom sugar syrup.',
    tags: ['Traditional 🍯']
  },
  {
    id: 'd5',
    name: 'Baklava',
    category: 'desserts',
    price: 5.99,
    description: 'Flaky honey phyllo pastry filled with chopped pistachios & nuts.',
    tags: ['Authentic 🌿']
  },
  {
    id: 'd6',
    name: 'Can Soda / Bottle Water',
    category: 'desserts',
    price: 1.99,
    description: 'Choice of Coke, Diet Coke, Sprite, Ginger Ale, Water.',
    tags: ['Beverage']
  },
  {
    id: 'd7',
    name: 'Snapple',
    category: 'desserts',
    price: 2.99,
    description: 'Assorted flavors: Lemon Tea, Peach Tea, Mango Madness.',
    tags: ['Beverage']
  },
];

export const REVIEWS_DATA = [
  {
    author: 'Zain Mirza',
    stats: '3 reviews · 3 photos',
    time: '3 months ago',
    rating: 5,
    text: "Finally New Brunswick has quality and easy platters. But honestly it's more than gyros. My go to is spicy Philly cheesesteak and wings and chicken over rice. Amazing food hands down best in town.",
    orderType: 'Take out',
    priceRange: '$20–30',
    ownerResponse: "Thank you so much for the love and support! 🙏 We’re glad you’re enjoying more than just the platters — the spicy Philly, wings, and chicken over rice are some of our favorites too. Hearing 'best in town' really means a lot to us. We appreciate you and look forward to serving you again soon! ❤️🔥"
  },
  {
    author: 'NS TECHNOLOGIES',
    stats: '3 reviews · 1 photo',
    time: 'a month ago',
    rating: 5,
    text: "Hello. First off, I want to talk about the food. The food here is awesome. I LOVE THIS PLACE!!! I ordered a double cheeseburger whit some specifications and they really got it all right. The atmosphere was chill and normal. Customer service awesome. I would really recommend this place for late night.",
    orderType: 'Dine in',
    priceRange: '$10–20',
    ownerResponse: "Thank you so much for the amazing review! We’re glad you enjoyed the double cheeseburger and that we got everything just the way you wanted it. It’s great to hear you enjoyed the atmosphere and our customer service too. We truly appreciate the recommendation and look forward to serving you again on your next late-night visit!"
  },
  {
    author: 'Nas "Nas"',
    stats: 'Local Guide · 11 reviews',
    time: '3 months ago',
    rating: 5,
    text: "This gyro spot is hands down one of the best places I’ve eaten at. The food was fresh, flavorful, and cooked perfectly. The gyro meat was juicy, the fries were crispy, and the portions were great for the price. What really stood out was the customer service, everyone was super friendly, patient, and welcoming from the moment we walked in.",
    orderType: 'Take out',
    priceRange: '$1–10',
    ownerResponse: "Thank you so much for such a thoughtful review! 🙏 It means a lot to our whole team to hear that you enjoyed the fresh food, crispy fries, generous portions, and especially the service. We always want every customer to feel welcomed and taken care of."
  },
  {
    author: 'بچه حاجي',
    stats: '7 reviews · 3 photos',
    time: '3 months ago',
    rating: 5,
    text: "I’ve drove from New York to try this new spot out, and the food did not disappoint. It tastes much better than nyc gyros. The combo over rice did not miss, and it was delicious. The receptionist was very helpful and nice, and gave extra food with extra sides.",
    orderType: 'Take out',
    priceRange: '$100+',
    ownerResponse: "Thank you so much for making the drive from New York to give us a try! 🙏 That truly means a lot to us. We’re so happy you enjoyed the combo over rice and had a great experience with our team. Hearing that we stood out even compared to NYC gyro spots is a huge compliment!"
  },
  {
    author: 'Aashray Shetty',
    stats: '4 reviews · 2 photos',
    time: '3 months ago',
    rating: 5,
    text: "Food was great! Ordered the chicken and lamb over rice. The portions were good sized and tasty. Owner was helpful and responsive.",
    orderType: 'Dinner',
    priceRange: '$10–20',
    ownerResponse: "Your 5-star rating made our day! Thank you very much for choosing us. 😊"
  },
  {
    author: 'Daniel Schwartzman',
    stats: '3 reviews',
    time: '3 months ago',
    rating: 5,
    text: "There’s a lot of similar restaurants in the area but this one is definitely top tier. I got a mixed platter and the meat tasted fresh and flavorful. Definitely coming back",
    orderType: 'Dine in',
    priceRange: '$10–20',
    ownerResponse: "Thank you so much for the amazing review! 🙏 We’re happy you enjoyed the mixed platter and found everything fresh and flavorful. Being called 'top tier' means a lot to us!"
  },
  {
    author: 'Rhea Desai',
    stats: '3 reviews',
    time: '2 months ago',
    rating: 5,
    text: "Very very good food! Ordered the chicken over rice. Chicken was well cooked and seasoned . Owner was very kind. Will definitely be coming back.",
    orderType: 'Take out',
    priceRange: '$10–20',
    ownerResponse: "Thank you so much for the 5-star review! We truly appreciate your support and hope to see you again soon! ⭐⭐⭐⭐⭐"
  },
  {
    author: 'TrapKatz Production',
    stats: '3 reviews',
    time: '3 months ago',
    rating: 5,
    text: "If you haven’t stopped here please do yourself a favor and treat yourself. This place is amazing food is delicious and the people are good people. Much love from a daily customer!",
    orderType: 'Take out',
    priceRange: '$10–20',
    ownerResponse: "Thank you for choosing us and for the 5-star rating! We truly appreciate every customer. 🙌"
  }
];

export const LOCATIONS_DATA = [
  {
    id: 'nb',
    isPrimary: true,
    name: 'New Brunswick (Flagship)',
    address: '152 Easton Ave, New Brunswick, NJ 08901',
    phone: '(848) 202-1430',
    phoneRaw: '8482021430',
    hoursSummary: 'Mon – Sat: 10:00 AM – 3:00 AM | Sun: 12:00 PM – 3:00 AM',
    hoursList: [
      { day: 'Mon – Sat', time: '10:00 AM – 3:00 AM' },
      { day: 'Sunday', time: '12:00 PM – 3:00 AM' }
    ],
    mapLink: 'https://maps.google.com/?q=152+Easton+Ave,+New+Brunswick,+NJ+08901',
    image: '/images/storefront.jpg'
  },
  {
    id: 'parlin',
    isPrimary: false,
    name: 'Parlin / Sayreville',
    address: '993 U.S. 9, Parlin, NJ 08859',
    phone: '(609) 527-9480',
    phoneRaw: '6095279480',
    hoursSummary: 'Mon – Sun: 10:00 AM – 3:00 AM Daily',
    hoursList: [
      { day: 'Mon – Sun', time: '10:00 AM – 3:00 AM' }
    ],
    mapLink: 'https://maps.google.com/?q=993+US+9,+Parlin,+NJ+08859',
    image: '/images/parlin-storefront.png'
  },
  {
    id: 'paterson',
    isPrimary: false,
    name: 'Paterson',
    address: '293 Grand St, Paterson, NJ 07501',
    phone: '(973) 341-3114',
    phoneRaw: '9733413114',
    hoursSummary: 'Mon – Sat: 11:00 AM – 3:00 AM | Sun: 11:00 AM – 11:00 PM',
    hoursList: [
      { day: 'Mon – Sat', time: '11:00 AM – 3:00 AM' },
      { day: 'Sunday', time: '11:00 AM – 11:00 PM' }
    ],
    mapLink: 'https://maps.google.com/?q=293+Grand+St,+Paterson,+NJ+07501',
    image: '/images/paterson-storefront.png'
  }
];
