export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-300">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>
        <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
          <p><strong>Last updated:</strong> August 28, 2025</p>

          <p>
            Welcome to Earthen Canvas. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> When you register by signing in with Google, we receive personally identifiable information, such as your name, email address, and profile picture, as provided by Google.
            </li>
            <li>
              <strong>Uploaded Content:</strong> We collect the art, images, and other content you upload to the platform, including any associated metadata.
            </li>
            <li>
              <strong>Usage Data:</strong> We may automatically collect information about how you access and use the website, such as your IP address, browser type, and pages visited.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Display your content and profile on the platform.</li>
            <li>Monitor and analyze usage and trends to improve your experience.</li>
            <li>Notify you of updates to the platform.</li>
            <li>Respond to your comments and inquiries.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We may share information we have collected about you in certain situations, such as when required by law or to protect the rights and safety of our users and the platform.
          </p>

          <h2 className="text-2xl font-semibold">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@eartencanvas.com" className="text-blue-600 dark:text-blue-400">privacy@eartencanvas.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}