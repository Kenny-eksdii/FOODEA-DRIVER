// const myProfile = {
//     name: "ByProgrammers",
//     profile_image: images.profile,
//     address: "No. 88, Jln Padungan, Kuching"
// }

const Details = [
  {
    id: 1,
    name: "Mc Kevin Gozon",
    address: "Caloocan (North)",
    distance: 1,
    image: require("../../assets/img/images/profilepic.png"),
  },
  {
    id: 2,
    name: "Lislyan Dela Cruz",
    address: "Caloocan (North)",
    distance: 2,
    image: require("../../assets/img/images/profilepic.png"),
  },
  {
    id: 3,
    name: "Juan Dela Cruz",
    address: "Caloocan (North)",
    distance: 2,
    image: require("../../assets/img/images/profilepic.png"),
  },

];
const categories = [
  {
    id: 1,
    name: "All Food",
    icon: require("../../assets/img/icons/junk_food.png"),
  },
  {
    id: 2,
    name: "Burger",
    icon: require("../../assets/img/icons/burger.png"),
  },
  {
    id: 3,
    name: "Hotdog",
    icon: require("../../assets/img/icons/hot-dog.png"),
  },
  {
    id: 4,
    name: "Spaghetti",
    icon: require("../../assets/img/icons/spaghetti.png"),
  },
  {
    id: 5,
    name: "Desserts",
    icon: require("../../assets/img/dummyData/cupcake.png"),
  }
];

const track_order_status = [
  {
    id: 1,
    title: "Order Confirmed",
    sub_title: "Your order has been received",
  },
  {
    id: 2,
    title: "Order Prepared",
    sub_title: "Your order has been prepared",
  },
  {
    id: 3,
    title: "Delivery in Progress",
    sub_title: "Hang on! Your food is on the way",
  },
  {
    id: 4,
    title: "Delivered",
    sub_title: "Enjoy your meal!",
  },
  {
    id: 5,
    title: "Rate Us",
    sub_title: "Help us improve our service",
  },
];

const myCard = [
  {
    id: 1,
    name: "Gcash",
    image: require("../../assets/img/icons/Gcashlogo.png"),
  },
  {
    id: 2,
    name: "PayPal",
    image: require("../../assets/img/icons/PayPalLogo.png"),
  },
  {
    id: 3,
    name: "COD",
    image: require("../../assets/img/icons/PayPalLogo.png"),
  },
];

const newCard = [
  {
    id: 1,
    name: "Apple Pay",
    image: require("../../assets/img/icons/ApplePayLogo.png"),
  },
  {
    id: 2,
    name: "Google Pay",
    image: require("../../assets/img/icons/Google_Pay_logo_PNG5.png"),
  },
  {
    id: 3,
    name: "VISA",
    image: require("../../assets/img/icons/VisaLogo.png"),
  },
  {
    id: 4,
    name: "MasterCard",
    image: require("../../assets/img/icons/MasterCardLogo.png"),
  },
];

const meatSuggestion = [
  {
    id: 1,
    name: "Burger",
    image: require("../../assets/img/dummyData/hamburger.png"),
  },
  {
    id: 2,
    name: "Steak",
    image: require("../../assets/img/dummyData/steak.png"),
  },
  {
    id: 3,
    name: "Chicken",
    image: require("../../assets/img/dummyData/chicken.png"),
  },
];

const dessertSuggestion = [
  {
    id: 1,
    name: "Ice Cream",
    image: require("../../assets/img/icons/ApplePayLogo.png"),
  },
  {
    id: 2,
    name: "Apple Pie",
    image: require("../../assets/img/icons/Google_Pay_logo_PNG5.png"),
  },
  {
    id: 3,
    name: "Cake",
    image: require("../../assets/img/icons/VisaLogo.png"),
  },
];

const myCart = [
  {
    id: 1,
    name: "Burger",
    price: 15.99,
    image: require("../../assets/img/dummyData/hamburger.png"),
  },
  {
    id: 2,
    name: "Hot Tacos",
    price: 10.99,
    image: require("../../assets/img/dummyData/hot_tacos.png"),
  },
  {
    id: 3,
    name: "Veg Biryani",
    price: 10.99,
    image: require("../../assets/img/dummyData/veg_biryani.png"),
  },
  {
    id: 4,
    name: "Wrap Sandwich",
    price: 10.99,
    image: require("../../assets/img/dummyData/wrap_sandwich.png"),
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  name2: "Ingredients",
  description:
    "A hamburger, or simply burger, is a food consisting of a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
  ingredients:
    "454 grams ground beef about 1 pound 1 tbsp olive oil, 1 tsp paprika, 1 tsp onion powder, 1 tsp garlic salt, 1 tbsp oyster sauce, ½ tsp black peppe, 1 large eg, 5 burger buns",
  categories: [1, 2],
  price: "49.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/hamburger.png"),
  time: 35,
  distance: 3,
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: "100.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/hot_tacos.png"),
  time: 30,
  distance: 3,
};

const Spaghetti = {
  id: 3,
  name: "Spaghetti",
  description: "Delicious spaghetti",
  categories: [1, 4],
  price: "65.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/spag.png"),
  time: 20,
  distance: 3,
};

const Hotdog = {
  id: 4,
  name: "Hotdog",
  description: "Delicious hotdog in bread",
  categories: [1, 3],
  price: "50.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/hot_dog.png"),
  time: 25,
  distance: 3,
};

const MangoPie = {
  id: 5,
  name: "MangoPie",
  description: "Delicious mangopie",
  categories: [1, 5],
  price: "63.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/mangopie.png"),
  time: 25,
  distance: 3,
};

const Sundae = {
  id: 6, 
  name: "Sundae",
  description: "Delicious Sundae",
  categories: [1, 5],
  price: "48.00",
  calories: 78,
  isFavourite: false,
  image: require("../../assets/img/dummyData/sundae.png"),
  time: 25,
  distance: 3,
};
const surveyData = [
  {
    Hotdog: {
      id: 4,
      name: "Hotdog",
      description: "Delicious hot dog in bread",
      image: require("../../assets/img/dummyData/hot_dog.png"),
    },
    Spaghetti: {
      id: 3,
      name: "Spaghetti",
      description: "Delicous spaghetti",
      image: require("../../assets/img/dummyData/spag.png"),
    },
  },
  {
    burger: {
      id: 1,
      name: "Hamburger",
      description: "Burger",
      image: require("../../assets/img/dummyData/hamburger.png"),
    },
    hotTacos: {
      id: 2,
      name: "Hot Tacos",
      description: "Hot Tacos",
      image: require("../../assets/img/dummyData/hot_tacos.png"),
    },
  },
];

const menu = [
  {
    id: 1,
    name: "Nearby you",
    list: [hamburger, Spaghetti, Hotdog, MangoPie, Sundae],
  },
  {
    id: 2,
    name: "Popular",
    list: [hamburger, hotTacos, Hotdog, MangoPie, Sundae],
  },
  {
    id: 3,
    name: "Trending",
    list: [hamburger, Spaghetti, Hotdog, MangoPie, Sundae],
  },
  {
    id: 4,
    name: "Recommended",
    list: [hamburger, hotTacos, Hotdog, MangoPie, Sundae],
  },
];

export default {
  //   myProfile,
  categories,
  menu,
  hamburger,
  myCart,
  myCard,
  newCard,
  track_order_status,
  surveyData,
  meatSuggestion,
  dessertSuggestion,
  Details
};
