export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge?: "Best Seller" | "New" | "Spicy";
  description?: string;
  images?: string[];
}

export const categories = [
  "All",
  "Coffee",
  "Non-Coffee",
  "Main Dishes",
  "Snacks",
  "Desserts",
] as const;

export type Category = (typeof categories)[number];

export const menuItems: MenuItem[] = [
  // ── Coffee ────────────────────────────────────────────
  {
    id: "1",
    name: "Ice Coffee Susu Gula Aren",
    price: "Rp 25.000",
    category: "Coffee",
    image: "/images/menu/1.jpg",
    badge: "Best Seller",
    description: "Our signature iced coffee milk, naturally sweetened with premium palm sugar for a perfect balance of bold espresso and creamy texture.",
    images: [
      "/images/menu/1.jpg",
      "/images/menu/espresso.jpg",
      "/images/menu/cafe-latte.jpg"
    ]
  },
  {
    id: "2",
    name: "Pistachio Coffee",
    price: "Rp 35.000",
    category: "Coffee",
    image: "/images/menu/2.jpg",
    badge: "New",
    description: "A rich and nutty espresso blend infused with real pistachio paste and topped with light crema.",
    images: [
      "/images/menu/2.jpg",
      "/images/menu/cappuccino.jpg"
    ]
  },
  {
    id: "4",
    name: "Cinnamon Cheese Coffee",
    price: "Rp 32.000",
    category: "Coffee",
    image: "/images/menu/4.jpg",
  },
  {
    id: "5",
    name: "Butterscotch Coffee",
    price: "Rp 30.000",
    category: "Coffee",
    image: "/images/menu/5.jpg",
  },
  {
    id: "7",
    name: "Espresso",
    price: "Rp 18.000",
    category: "Coffee",
    image: "/images/menu/espresso.jpg",
  },
  {
    id: "8",
    name: "Café Latte",
    price: "Rp 28.000",
    category: "Coffee",
    image: "/images/menu/cafe-latte.jpg",
    badge: "Best Seller",
  },
  {
    id: "9",
    name: "Cappuccino",
    price: "Rp 28.000",
    category: "Coffee",
    image: "/images/menu/cappuccino.jpg",
  },

  // ── Non-Coffee ────────────────────────────────────────
  {
    id: "10",
    name: "Matcha Latte",
    price: "Rp 30.000",
    category: "Non-Coffee",
    image: "/images/menu/matcha-latte.jpg",
    badge: "Best Seller",
  },
  {
    id: "11",
    name: "Chocolate Milkshake",
    price: "Rp 28.000",
    category: "Non-Coffee",
    image: "/images/menu/chocolate-milkshake.jpg",
  },
  {
    id: "12",
    name: "Fresh Orange Juice",
    price: "Rp 22.000",
    category: "Non-Coffee",
    image: "/images/menu/orange-juice.jpg",
  },
  {
    id: "13",
    name: "Strawberry Smoothie",
    price: "Rp 28.000",
    category: "Non-Coffee",
    image: "/images/menu/strawberry-smoothie.jpg",
    badge: "New",
  },

  // ── Main Dishes ───────────────────────────────────────
  {
    id: "3",
    name: "Nasi Gila 527",
    price: "Rp 38.000",
    category: "Main Dishes",
    image: "/images/menu/3.jpg",
    badge: "Spicy",
    description: "A savory and spicy mixed rice dish loaded with sausage, meatballs, and fresh vegetables, stir-fried to perfection.",
    images: [
      "/images/menu/3.jpg",
      "/images/menu/beef-burger.jpg"
    ]
  },
  {
    id: "6",
    name: "Spaghetti Carbonara",
    price: "Rp 42.000",
    category: "Main Dishes",
    image: "/images/menu/6.jpg",
  },
  {
    id: "14",
    name: "Chicken Katsu Rice",
    price: "Rp 40.000",
    category: "Main Dishes",
    image: "/images/menu/chicken-katsu.jpg",
    badge: "Best Seller",
  },
  {
    id: "15",
    name: "Beef Burger",
    price: "Rp 45.000",
    category: "Main Dishes",
    image: "/images/menu/beef-burger.jpg",
  },
  {
    id: "16",
    name: "Chicken Sandwich",
    price: "Rp 35.000",
    category: "Main Dishes",
    image: "/images/menu/chicken-sandwich.jpg",
    badge: "New",
  },

  // ── Snacks ────────────────────────────────────────────
  {
    id: "17",
    name: "French Fries",
    price: "Rp 22.000",
    category: "Snacks",
    image: "/images/menu/french-fries.jpg",
  },
  {
    id: "18",
    name: "Chicken Wings",
    price: "Rp 32.000",
    category: "Snacks",
    image: "/images/menu/chicken-wings.jpg",
    badge: "Spicy",
  },
  {
    id: "19",
    name: "Spring Rolls",
    price: "Rp 25.000",
    category: "Snacks",
    image: "/images/menu/spring-rolls.jpg",
  },

  // ── Desserts ──────────────────────────────────────────
  {
    id: "20",
    name: "Tiramisu",
    price: "Rp 35.000",
    category: "Desserts",
    image: "/images/menu/tiramisu.jpg",
    badge: "Best Seller",
  },
  {
    id: "21",
    name: "Cheesecake",
    price: "Rp 32.000",
    category: "Desserts",
    image: "/images/menu/cheesecake.jpg",
  },
  {
    id: "22",
    name: "Chocolate Lava Cake",
    price: "Rp 38.000",
    category: "Desserts",
    image: "/images/menu/chocolate-lava.jpg",
    badge: "New",
  },
];
