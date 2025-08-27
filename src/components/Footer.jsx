import Link from 'next/link';
import RealTimeClock from './RealTimeClock';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 md:py-16 mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* Section 1: Brand Info & Clock */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Earthen Canvas</h3>
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-wide">
              <RealTimeClock />
            </div>
            
            <p className="text-sm">
              Your artistic journey begins here. Explore, create, and share your masterpieces.
            </p>

          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3: Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Section 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@eartencanvas.com</li>
              <li>Phone: +880 123 456789</li>
              <li>Location: Namuja, Rajshahi Division, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-8 text-sm text-center">
          &copy; {currentYear} Earthen Canvas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}