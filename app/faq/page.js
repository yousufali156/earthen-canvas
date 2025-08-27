export default function FAQPage() {
  const faqs = [
    {
      question: "How do I create an account on Earthen Canvas?",
      answer: "You can easily create an account by clicking the 'Sign In' button and choosing to sign in with your Google account. We handle the rest automatically!"
    },
    {
      question: "What kind of art can I upload?",
      answer: "You can upload digital paintings, traditional art scans, photography, 3D models, and more. We encourage creativity in all forms, but please ensure your work adheres to our community guidelines and does not contain any hateful or explicit content."
    },
    {
      question: "How does copyright work for my art?",
      answer: "You retain all copyrights to your work. By uploading to Earthen Canvas, you grant us a non-exclusive license to display your art on our platform. You can remove your art at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Frequently Asked Questions (FAQ)</h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{faq.question}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}