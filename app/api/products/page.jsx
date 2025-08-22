import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ProductCard from "@/src/components/ProductCard";

// Dummy products for demo
const dummyProducts = [
  {
    _id: "1",
    name: "Handmade Vase",
    price: 25,
    image: "/products/vase.jpg",
    description: "Elegant handmade ceramic vase for your home decor."
  },
  {
    _id: "2",
    name: "Ceramic Mug",
    price: 15,
    image: "/products/mug.jpg",
    description: "Stylish ceramic mug for your coffee or tea."
  },
  {
    _id: "3",
    name: "Decorative Bowl",
    price: 30,
    image: "/products/bowl.jpg",
    description: "Beautiful ceramic bowl perfect for dining or decoration."
  },
  {
    _id: "4",
    name: "Plant Pot",
    price: 20,
    image: "/products/plant-pot.jpg",
    description: "Handcrafted plant pot for indoor and outdoor plants."
  },
  {
    _id: "5",
    name: "Ceramic Plate Set",
    price: 45,
    image: "/products/plate-set.jpg",
    description: "Set of 4 decorative ceramic plates."
  },
];

export default function ProductsPage() {
  // Use dummyProducts instead of fetching
  const products = dummyProducts;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold text-center text-charcoal mb-10">
          Our Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
