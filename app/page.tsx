import type { Metadata } from 'next';
import { TipCalculator } from '@/components/calculator/TipCalculator';
import { HistoryList } from '@/components/history/HistoryList';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tip Calculator - Fast & Easy Tip Calculator Online',
  description: 'Free online tip calculator for restaurants, delivery & all services. Calculate tips instantly, split bills easily. Simple, fast & accurate. Start calculating!',
  alternates: {
    canonical: 'https://tipcalculator.page/',
  },
  openGraph: {
    title: 'Tip Calculator - Fast & Easy Tip Calculator',
    description: 'Free tip calculator. Calculate tips, split bills, and determine gratuity for any service.',
    url: 'https://tipcalculator.page/',
    type: 'website',
  },
};

// Schema.org structured data
const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tip Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Free online tip calculator to calculate tips and split bills for restaurants, delivery, and services.',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tip Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, easy, and accurate tip calculator. Calculate tips, split bills, and determine the perfect gratuity for any service.
          </p>
        </div>

        {/* Main Calculator */}
        <TipCalculator />

        {/* History */}
        <HistoryList />

        {/* Content Section for SEO */}
        <div className="max-w-4xl mx-auto mt-16">
          {/* How to Use Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Use This Tip Calculator
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our tip calculator makes it simple to calculate tips for any service. Whether you're at a restaurant, ordering delivery, or using any tipping service, this free tip calculator helps you determine the appropriate gratuity amount instantly. Simply enter your bill amount into the tip calculator, select your desired tip percentage, and our calculator will instantly compute the tip amount and total bill.
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Steps:</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Enter your bill amount</strong> - Input the total cost before tip</li>
                <li><strong>Select tip percentage</strong> - Choose from common percentages (10%, 15%, 18%, 20%, 25%) or enter a custom tip percentage</li>
                <li><strong>Split the bill</strong> - Adjust the number of people to split the bill evenly</li>
                <li><strong>View results</strong> - See your tip amount, total bill, and per-person amounts instantly</li>
              </ol>
            </div>
          </section>

          {/* Common Tipping Percentages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Tipping Percentages
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Understanding standard tip percentages helps you tip appropriately. Our tip calculator includes preset options for the most common tipping scenarios. Different services typically warrant different tip percentages based on service quality and industry standards. Use the tip calculator to find the perfect amount.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  <Link href="/restaurant" className="hover:underline">Restaurant Service</Link>
                </h3>
                <p className="text-gray-700 mb-2">Standard: 15-20%</p>
                <p className="text-sm text-gray-600">
                  For restaurant dining, a 15-20% tip is standard for good service. Use 15% for adequate service, 18-20% for excellent service, and 25% or more for exceptional service. Our restaurant tip calculator helps you calculate the perfect tip based on your dining experience.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  <Link href="/delivery" className="hover:underline">Delivery Services</Link>
                </h3>
                <p className="text-gray-700 mb-2">Standard: 10-15%</p>
                <p className="text-sm text-gray-600">
                  For food delivery, a 10-15% tip is typical, with a minimum of $3-5 for small orders. Consider weather conditions, distance, and delivery difficulty when calculating your tip. Our delivery tip calculator ensures your delivery driver receives fair compensation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Taxi & Rideshare</h3>
                <p className="text-gray-700 mb-2">Standard: 10-15%</p>
                <p className="text-sm text-gray-600">
                  For taxi and rideshare services, tip 10-15% of the fare. Add extra for help with luggage or exceptional service. Our tip calculator quickly determines the appropriate amount for transportation services.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Beauty & Spa Services</h3>
                <p className="text-gray-700 mb-2">Standard: 15-20%</p>
                <p className="text-sm text-gray-600">
                  For haircuts, manicures, massages, and spa services, tip 15-20% of the service cost. For salon owners providing the service, tipping is optional but appreciated. Calculate your beauty service tip accurately with our percentage calculator.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our Tip Calculator
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-600">
                  Instant tip calculations as you type. No waiting, no complicated steps - just fast, accurate results.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Bill Splitting</h3>
                <p className="text-sm text-gray-600">
                  Easily split bills among multiple people. Calculate per-person amounts including tip automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Currencies</h3>
                <p className="text-sm text-gray-600">
                  Support for USD, EUR, GBP, CAD, AUD, and JPY. Calculate tips in your preferred currency with proper formatting.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tip Calculator Features
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Instant tip calculation</strong> - See results in real-time as you enter your bill amount and tip percentage with our tip calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Custom tip percentages</strong> - Not limited to presets; enter any tip percentage you want in the tip calculator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Bill splitting calculator</strong> - Divide bills and tips evenly among any number of people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Scene-specific recommendations</strong> - Get appropriate tip percentage suggestions based on service type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Calculation history</strong> - Save and review your past tip calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Mobile-friendly</strong> - Works perfectly on phones, tablets, and desktops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>100% free</strong> - No registration, no hidden fees, completely free tip calculator</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Tipping
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What is a tip calculator?</h3>
                <p className="text-gray-700">
                  A tip calculator is a tool that helps you quickly calculate the appropriate tip amount based on your bill total and desired tip percentage. It eliminates mental math and ensures accurate tipping every time.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">What is the standard tip percentage?</h3>
                <p className="text-gray-700">
                  The standard tip percentage varies by service. For restaurants, 15-20% is typical. For delivery, 10-15% is common. For exceptional service, 20-25% or more is appropriate. Use our tip calculator to find the right amount for any situation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">How do you calculate a 20% tip?</h3>
                <p className="text-gray-700">
                  To calculate a 20% tip, multiply your bill by 0.20. For example, on a $50 bill, the tip would be $50 × 0.20 = $10. Our tip calculator does this automatically and shows you the total amount including tip.
                </p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link href="/faq" className="text-green-600 hover:text-green-700 font-medium">
                View All FAQs →
              </Link>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Learn More About Tipping
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/guide/how-to-calculate-tip" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-600 mb-2">How to Calculate Tip</h3>
                <p className="text-gray-600">
                  Learn the formulas and mental math tricks for calculating tips without a calculator. Master quick tip calculation methods.
                </p>
              </Link>
              <Link href="/guide/tipping-guide-usa" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-green-600 mb-2">Tipping Guide USA</h3>
                <p className="text-gray-600">
                  Complete guide to tipping etiquette in the United States. Learn when to tip, how much to tip, and industry-specific guidelines.
                </p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Start Calculating Tips Now
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Use our free tip calculator to calculate tips accurately every time. Whether you're dining out, ordering delivery, or using any service that accepts tips, our tip calculator makes it simple to determine the right amount. Try the tip calculator now - no registration required!
            </p>
            <a href="#" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Calculate Tip
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
