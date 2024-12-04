import samsungMobile from "./assets/samsungMobile.jpeg";
import samsungLaptop from "./assets/samsungLaptop.webp";
import appleWatch from "./assets/appleWatch.webp";
import jblBuds from "./assets/jblBuds.webp";
import gadgets from "./assets/gadgets.jpg";

const productData = [
  // Mobiles
  {
    id: 1,
    name: "Samsung Galaxy S23",
    category: "Mobile",
    price: 65518,
    rating: 4.5,
    image: "samsungGalaxyS23.jpg",
    description:
      "The Samsung Galaxy S23 features a stunning Dynamic AMOLED display with a smooth 120Hz refresh rate. Powered by the Snapdragon 8 Gen 2 processor, it delivers seamless performance. Its triple-camera setup captures exceptional photos and videos. The device boasts a sleek design, IP68 water resistance, and a long-lasting 5000mAh battery with fast charging support.",
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    category: "Mobile",
    price: 81918,
    rating: 4.7,
    image: "iphone15.jpg",
    description:
      "The Apple iPhone 15 features the powerful A17 Bionic chip for exceptional speed. Its Super Retina XDR display offers vibrant visuals, while the advanced camera system ensures stunning photos. With durable Ceramic Shield protection, iOS 17 software, and MagSafe support, the iPhone 15 is designed to keep up with your lifestyle.",
  },

  // Laptops
  {
    id: 3,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 89918,
    rating: 4.8,
    image: "dellXPS13.jpg",
    description:
      "The Dell XPS 13 is a premium ultrabook with an InfinityEdge display and exceptional performance powered by Intel Evo processors. It offers up to 16GB RAM and 1TB SSD storage for multitasking and productivity. A lightweight aluminum body and a long-lasting battery make it a top choice for professionals on the go.",
  },
  {
    id: 4,
    name: "MacBook Air M2",
    category: "Laptop",
    price: 98078,
    rating: 4.9,
    image: "macBookAirM2.jpg",
    description:
      "The MacBook Air M2 is powered by Apple’s M2 chip, providing unmatched speed and efficiency. Its Retina display ensures vibrant visuals, while the lightweight and fanless design offers portability and silent operation. With up to 18 hours of battery life, it’s perfect for all-day use.",
  },

  // Tablets
  {
    id: 5,
    name: "Apple iPad Pro",
    category: "Tablet",
    price: 98078,
    rating: 4.9,
    image: "ipadPro.jpg",
    description:
      "The Apple iPad Pro features the M2 chip, delivering laptop-like performance. Its Liquid Retina XDR display offers stunning visuals, while ProMotion technology ensures a responsive touch experience. The device supports the Apple Pencil and Magic Keyboard for creativity and productivity.",
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9",
    category: "Tablet",
    price: 73718,
    rating: 4.6,
    image: "galaxyTabS9.jpg",
    description:
      "The Samsung Galaxy Tab S9 offers a premium tablet experience with its AMOLED display and S Pen support. Powered by the Snapdragon 8 Gen 2 chip, it excels in both performance and battery life. Its durable design and Android OS make it a versatile choice for work and play.",
  },

  // Watches
  {
    id: 7,
    name: "Apple Watch Series 9",
    category: "Watch",
    price: 32778,
    rating: 4.8,
    image: "appleWatchSeries9.jpg",
    description:
      "The Apple Watch Series 9 combines style and functionality with advanced health tracking features. Its always-on Retina display ensures clear visibility, while new performance improvements make it faster and more efficient. The watch is perfect for fitness, communication, and daily tasks.",
  },
  {
    id: 8,
    name: "Samsung Galaxy Watch 6",
    category: "Watch",
    price: 29999,
    rating: 4.7,
    image: "galaxyWatch6.jpg",
    description:
      "The Samsung Galaxy Watch 6 is a versatile smartwatch with an AMOLED display and robust health monitoring features. It integrates seamlessly with Android devices, offering notifications, fitness tracking, and advanced sleep monitoring. Its stylish design ensures it suits every occasion.",
  },

  // Headphones
  {
    id: 9,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    rating: 4.9,
    image: "sonyWH1000XM5.jpg",
    description:
      "The Sony WH-1000XM5 offers industry-leading noise cancellation and exceptional audio quality. With up to 30 hours of battery life, it is perfect for long listening sessions. The headphones include touch controls and advanced voice assistant integration for hands-free use.",
  },
  {
    id: 10,
    name: "Bose QuietComfort 45",
    category: "Headphones",
    price: 29999,
    rating: 4.8,
    image: "boseQuietComfort45.jpg",
    description:
      "The Bose QuietComfort 45 headphones deliver world-class noise cancellation and immersive sound quality. With a lightweight design, long battery life, and a comfortable fit, they are perfect for travel, work, and relaxation.",
  },

  // Buds
  {
    id: 11,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Buds",
    price: 24999,
    rating: 4.8,
    image: "airpodsPro2.jpg",
    description:
      "The Apple AirPods Pro (2nd Gen) offers immersive sound with active noise cancellation and spatial audio. The compact design ensures a comfortable fit, while the MagSafe charging case provides extended battery life. They are perfect for seamless connectivity across Apple devices.",
  },
  {
    id: 12,
    name: "Samsung Galaxy Buds 2 Pro",
    category: "Buds",
    price: 17999,
    rating: 4.7,
    image: "galaxyBuds2Pro.jpg",
    description:
      "The Samsung Galaxy Buds 2 Pro deliver high-fidelity sound with active noise cancellation. Designed for all-day comfort, they feature a lightweight build and IPX7 water resistance. The buds integrate seamlessly with Samsung devices for an enhanced audio experience.",
  },

  // Buds
  {
    id: 13,
    name: "JBL Tune 230NC",
    category: "Buds",
    price: 8999,
    rating: 4.5,
    image: "jblTune230NC.jpg",
    description:
      "The JBL Tune 230NC TWS earbuds provide rich sound with deep bass and active noise cancellation. With a sleek design and comfortable fit, they are ideal for extended use. The battery life of up to 40 hours ensures you stay connected to your favorite music all day long.",
  },
];

export {
  samsungMobile,
  samsungLaptop,
  appleWatch,
  jblBuds,
  gadgets,
  productData,
};
