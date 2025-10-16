import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tip Calculator FAQ - Frequently Asked Questions',
  description: 'Frequently asked questions about tip calculator, tipping etiquette, and how to calculate tips. Get answers to common tipping questions.',
  alternates: {
    canonical: 'https://tipcalculator.page/faq',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a tip calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tip calculator is a tool that helps you quickly calculate the appropriate tip amount based on your bill total and desired tip percentage. It eliminates mental math and ensures accurate tipping every time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you calculate a 20% tip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To calculate a 20% tip, multiply your bill by 0.20. For example, on a $50 bill: $50 × 0.20 = $10 tip. You can also calculate 10% and double it for a quick mental math method.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the standard tip percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard tip percentage varies by service. For restaurants, 15-20% is typical. For delivery, 10-15% is common. For exceptional service, 20-25% or more is appropriate.',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tip Calculator FAQ
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Frequently asked questions about using a tip calculator and tipping etiquette
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What is a tip calculator?
              </h2>
              <p className="text-gray-700">
                A tip calculator is an online tool that helps you calculate tip amounts based on your bill total and desired tip percentage. Our tip calculator instantly computes the tip amount, total bill, and can split the bill among multiple people. It's a free, easy way to ensure you're tipping appropriately without doing mental math.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                How do you calculate a 20% tip?
              </h2>
              <p className="text-gray-700 mb-2">
                To calculate a 20% tip, multiply your bill amount by 0.20. For example:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>$50 bill × 0.20 = $10 tip</li>
                <li>$75 bill × 0.20 = $15 tip</li>
                <li>$100 bill × 0.20 = $20 tip</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Quick mental math: Calculate 10% by moving the decimal left one place, then double it. Our tip calculator does this instantly for any amount.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What is the standard tip percentage?
              </h2>
              <p className="text-gray-700 mb-2">
                Standard tip percentages vary by service type:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Restaurants:</strong> 15-20% (18% is most common)</li>
                <li><strong>Delivery:</strong> 10-15% with $3-5 minimum</li>
                <li><strong>Taxi/Rideshare:</strong> 10-15% of fare</li>
                <li><strong>Hair Salon:</strong> 15-20% of service cost</li>
                <li><strong>Bar:</strong> $1-2 per drink or 15-20% of tab</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Use our <Link href="/" className="text-green-600 hover:underline">tip calculator</Link> to calculate the exact amount for any service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Should I tip on the pre-tax or post-tax amount?
              </h2>
              <p className="text-gray-700">
                Traditionally, tips are calculated on the pre-tax amount (subtotal). However, it's becoming more common to tip on the post-tax total. Both are acceptable. The tip calculator allows you to enter either amount - most people use the total bill amount shown at the bottom of their receipt.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                How do I split a bill with tips using the calculator?
              </h2>
              <p className="text-gray-700">
                To split a bill with our tip calculator: Enter the total bill amount, select your desired tip percentage, then adjust the "Split Between" number to match your group size. The calculator instantly shows each person's share of the bill, tip, and total amount. It automatically divides everything evenly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                When should I tip more than 20%?
              </h2>
              <p className="text-gray-700 mb-2">
                Consider tipping 25% or more in these situations:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Exceptional, outstanding service</li>
                <li>Complex orders or special requests</li>
                <li>Large group dinners (6+ people)</li>
                <li>Holiday dining or busy periods</li>
                <li>Bad weather for delivery orders</li>
                <li>Regular customer at your favorite establishment</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Is it okay to tip less than 15%?
              </h2>
              <p className="text-gray-700">
                Tipping less than 15% should only be for poor service. If service is subpar, 10-12% is acceptable. For truly unacceptable service, you can tip less or speak to a manager. However, remember that problems might be beyond the server's control. Always tip something unless service was completely unacceptable.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Do I need to tip for takeout orders?
              </h2>
              <p className="text-gray-700">
                For takeout, tipping is optional but appreciated. A small tip of $1-2 or 10% is appropriate for the effort of packaging your order. Full-service restaurants appreciate tips on takeout orders, while fast-casual establishments don't expect tips for counter service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                How do tip calculators work?
              </h2>
              <p className="text-gray-700">
                Tip calculators use a simple formula: Bill Amount × (Tip Percentage ÷ 100) = Tip Amount. The calculator then adds the tip to your bill for the total. Our tip calculator also divides the total by the number of people if you're splitting the bill. It performs these calculations instantly as you type.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Is this tip calculator free to use?
              </h2>
              <p className="text-gray-700">
                Yes! Our tip calculator is completely free with no registration required. No downloads, no hidden fees, no personal information needed. Use it as many times as you want on any device. It works on phones, tablets, and computers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Can I use this tip calculator for any currency?
              </h2>
              <p className="text-gray-700">
                Yes! Our tip calculator supports multiple currencies including USD ($), EUR (€), GBP (£), CAD (C$), AUD (A$), and JPY (¥). Select your currency from the dropdown menu and the calculator will format all amounts correctly for that currency.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                How accurate is the tip calculator?
              </h2>
              <p className="text-gray-700">
                Our tip calculator is 100% accurate. It uses precise mathematical calculations and rounds to two decimal places (cents). Unlike mental math which can lead to errors, the calculator ensures you always get the correct tip amount every time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Does the tip calculator save my calculations?
              </h2>
              <p className="text-gray-700">
                Yes! The calculator includes a history feature that saves your recent calculations locally on your device. You can view past calculations, restore them with one click, or delete them. Your data never leaves your device and is not shared with anyone.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What if I want to calculate a custom tip percentage?
              </h2>
              <p className="text-gray-700">
                Our tip calculator supports custom tip percentages. While we provide common presets (10%, 15%, 18%, 20%, 25%), you can enter any percentage from 0% to 100% in the custom field. This is perfect when you want to tip a specific amount that isn't a standard percentage.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Can I use the tip calculator for group dinners?
              </h2>
              <p className="text-gray-700">
                Absolutely! The tip calculator is perfect for group dinners. Enter the total bill, select your tip percentage, and adjust the number of people. The calculator shows the total per person including their share of the tip. This makes splitting bills at group dinners quick and fair.
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Use the Tip Calculator?
            </h2>
            <p className="text-gray-700 mb-6">
              Calculate tips easily for restaurants, delivery, and any service. Fast, accurate, and free!
            </p>
            <Link href="/" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Use Tip Calculator Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
