import appleWatch from "./assets/appleWatch.webp";
import applebuds from "./assets/applebuds.jpg";
import ipad from "./assets/ipad.jpg";
import mac from "./assets/mac.jpg";
import S23 from "./assets/S23.jpg";

const productData = [
  // Mobiles
  {
    id: 1,
    name: "Samsung Galaxy S23",
    category: "Mobile",
    price: 65518,
    rating: 4,
    image: "samsungGalaxyS23.jpg",
    description:
      "The Samsung Galaxy S23 features a Dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and a triple-camera setup, delivering smooth performance and stunning photos.",
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    category: "Mobile",
    price: 81918,
    rating: 5,
    image: "iphone15.jpg",
    description:
      "The iPhone 15 boasts the A17 Bionic chip, Super Retina XDR display, and an advanced camera system, offering exceptional performance and stunning visuals.",
  },

  // Laptops
  {
    id: 3,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 89918,
    rating: 3,
    image: "dellXPS13.jpg",
    description:
      "The Dell XPS 13 is a premium ultrabook with Intel Evo processors, a lightweight aluminum body, and a long-lasting battery for professionals on the go.",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 98078,
    rating: 4,
    image: "macBookAirM2.jpg",
    description:
      "The MacBook Air M2 offers the powerful M2 chip, Retina display, and up to 18 hours of battery life, combining portability and performance.",
  },

  // Tablets
  {
    id: 5,
    name: "Apple iPad Pro",
    category: "Tablet",
    price: 98078,
    rating: 5,
    image: "ipadPro.jpg",
    description:
      "The iPad Pro with the M2 chip and Liquid Retina XDR display offers laptop-like performance, making it ideal for creativity and productivity.",
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9",
    category: "Tablet",
    price: 73718,
    rating: 2,
    image: "galaxyTabS9.jpg",
    description:
      "The Galaxy Tab S9 features an AMOLED display and Snapdragon 8 Gen 2 chip, providing top-tier performance and long-lasting battery life.",
  },

  // Watches
  {
    id: 7,
    name: "Apple Watch Series 9",
    category: "Watch",
    price: 32778,
    rating: 4,
    image: "appleWatchSeries9.jpg",
    description:
      "The Apple Watch Series 9 combines health tracking, a clear always-on display, and improved performance, ideal for fitness and daily tasks.",
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch 6",
    category: "Watch",
    price: 29999,
    rating: 3,
    image: "galaxyWatch6.jpg",
    description:
      "The Galaxy Watch 6 offers an AMOLED display, fitness tracking, and integration with Android devices, designed for everyday use.",
  },

  // Headphones
  {
    id: 9,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    rating: 5,
    image: "sonyWH1000XM5.jpg",
    description:
      "The Sony WH-1000XM5 offers industry-leading noise cancellation, exceptional audio, and up to 30 hours of battery life for uninterrupted listening.",
  },
  {
    id: 10,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: 29999,
    rating: 4,
    image: "boseQuietComfort45.jpg",
    description:
      "The Bose QuietComfort 45 delivers world-class noise cancellation, immersive sound, and long battery life, perfect for travel and relaxation.",
  },

  // Buds
  {
    id: 11,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Buds",
    price: 24999,
    rating: 5,
    image: "airpodsPro2.jpg",
    description:
      "The AirPods Pro (2nd Gen) features active noise cancellation, spatial audio, and a comfortable design with extended battery life.",
  },
  {
    id: 12,
    name: "Samsung Galaxy Buds 2 Pro",
    category: "Buds",
    price: 17999,
    rating: 4,
    image: "galaxyBuds2Pro.jpg",
    description:
      "The Galaxy Buds 2 Pro provide high-quality sound, noise cancellation, and a comfortable fit, ideal for extended listening sessions.",
  },
];

export { appleWatch, applebuds,ipad,S23,mac, productData };
