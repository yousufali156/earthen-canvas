import Image from "next/image";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group border border-transparent hover:border-blue-500 cursor-pointer"
    >
      <div className="relative w-full h-56 bg-gray-200 dark:bg-gray-700">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm h-10 overflow-hidden">{product.description}</p>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">${product.price}</p>
        <div className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          View Details
        </div>
      </div>
    </div>
  );
}
