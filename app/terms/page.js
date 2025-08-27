import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-900">
            
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-300">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                    Terms of Service
                </h1>
                <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
                    <p><strong>Last updated:</strong> August 28, 2025</p>

                    <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Earthen Canvas website (the "Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
                    </p>

                    <h2 className="text-2xl font-semibold">2. User Accounts</h2>
                    <p>
                        To use certain features of the Service, you must register for an account using your Google credentials. You are responsible for safeguarding your account and for any activities or actions under your account.
                    </p>

                    <h2 className="text-2xl font-semibold">3. User Content</h2>
                    <p>
                        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
                    </p>
                    <p>
                        You may not upload any content that is illegal, offensive, or infringes on the rights of others. We reserve the right to remove any content that violates these terms.
                    </p>

                    <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
                    <p>
                        You retain any and all of your rights to any Content you submit, post or display on or through the Service. By posting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute such Content on and through the Service. This license is for the sole purpose of operating, promoting, and improving the Service.
                    </p>

                    <h2 className="text-2xl font-semibold">5. Termination</h2>
                    <p>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">6. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:support@eartencanvas.com" className="text-blue-600 dark:text-blue-400">support@eartencanvas.com</a>
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 
                                   bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                                   font-semibold rounded-full shadow-lg 
                                   hover:from-blue-600 hover:to-purple-700 
                                   hover:shadow-xl transform hover:-translate-y-1 
                                   transition-all duration-300 ease-in-out
                                   focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        <FiArrowLeft className="mr-2 text-xl" />
                        <span className="text-lg">Back to Home</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}