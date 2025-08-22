import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

async function getProductDetails(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: 'no-store'
  });
  if (!res.ok) {
     return null; // Or handle not found case
  }
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductDetails(params.id);

  if (!product) {
      return <div>Product not found!</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full h-96 overflow-hidden rounded-2xl">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
            </div>
            <div>
                <h1 className="text-4xl font-playfair font-bold text-charcoal mb-4">{product.name}</h1>
                <p className="text-charcoal/80 mb-6">{product.description}</p>
                <span className="text-3xl font-bold text-terracotta">${product.price}</span>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}