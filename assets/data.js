const productsData = [
  {
    id: 1,
    name: "Silla Banqueta",
    price: 15000,
    category: "sillas",
    productImg:
      "./assets/images/products/Sillas/vincent-wachowiak-Yh7HRBScECs.png",
  },
  {
    id: 2,
    name: "Mesa Ratona Nordica",
    price: 12000,
    category: "mesas",
    productImg: "./assets/images/products/Mesas/sam-moghadam-khamseh-table.png",
  },
  {
    id: 3,
    name: "Mesa de Luz Softking",
    price: 15000,
    category: "mesas",
    productImg:
      "./assets/images/products/Mesas/sam-moghadam-khamseh-light-table.png",
  },
  {
    id: 4,
    name: "Mesa Ratona Kaminski",
    price: 14000,
    category: "mesas",
    productImg: "./assets/images/products/Mesas/oriento-S_ncR5Q41PI.png",
  },
  {
    id: 5,
    name: "Sofa Yazdi",
    price: 46000,
    category: "sillones",
    productImg:
      "./assets/images/products/Sillones/hadi-yazdi-aznaveh-couch.png",
  },
  {
    id: 6,
    name: "Sofa Phillip",
    price: 40000,
    category: "sillones",
    productImg:
      "./assets/images/products/Sillones/phillip-goldsberry-fZuleEfeA1Q-unsplash-removebg-preview.png",
  },
  {
    id: 7,
    name: "Silla Metalica",
    price: 16000,
    category: "exterior",
    productImg:
      "./assets/images/products/Exterior/closeup-of-simple-modern-chair-with-metallic-legs.png",
  },
  {
    id: 8,
    name: "Silla Metalica High",
    price: 17000,
    category: "exterior",
    productImg:
      "./assets/images/products/Exterior/simple-chair-with-metallic-high-legs.png",
  },
  {
    id: 9,
    name: "Mecedora Adhora",
    price: 14000,
    category: "exterior",
    productImg: "./assets/images/products/Exterior/empty-rocking-chair.png",
  },
  {
    id: 10,
    name: "Silla Ant",
    price: 16000,
    category: "sillas",
    productImg:
      "./assets/images/products/Sillas/empty-modern-room-with-furniture.png",
  },
  {
    id: 11,
    name: "Silla Forest",
    price: 17000,
    category: "sillas",
    productImg:
      "./assets/images/products/Sillas/furniture-modern-studio-lifestyle-green.png",
  },
  {
    id: 12,
    name: "Silla Vintage",
    price: 18000,
    category: "sillas",
    productImg: "./assets/images/products/Sillas/vintage-furniture-chair.png",
  },
  {
    id: 13,
    name: "Sillon Forest",
    price: 22000,
    category: "sillones",
    productImg: "./assets/images/products/Sillones/empty-modern-room.png",
  },
  {
    id: 14,
    name: "Sillon Wing Night",
    price: 25000,
    category: "sillones",
    productImg:
      "./assets/images/products/Sillones/wing-back-chair-on-carpet-no-people.png",
  },
  {
    id: 15,
    name: "Cajonera Black Noir",
    price: 24000,
    category: "almacenamiento",
    productImg:
      "./assets/images/products/Almacenamiento/closeup-shot-of-set-of-wooden-drawers.png",
  },
  {
    id: 16,
    name: "Comoda Vintage",
    price: 27000,
    category: "almacenamiento",
    productImg: "./assets/images/products/Almacenamiento/vintage-furniture.png",
  },
  {
    id: 17,
    name: "Cajonera Robust",
    price: 30000,
    category: "almacenamiento",
    productImg:
      "./assets/images/products/Almacenamiento/wooden-piece-of-furniture-interior.png",
  },
  {
    id: 18,
    name: "Comoda Tiny",
    price: 20000,
    category: "almacenamiento",
    productImg:
      "./assets/images/products/Almacenamiento/wooden-sideboard-table.png",
  },
];

const splitProducts = (size) => {
  let dividedProducts = [];

  for (let i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }

  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};
