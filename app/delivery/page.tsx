import type { Metadata } from 'next';
import { TipCalculator } from '@/components/calculator/TipCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivery Tip Calculator | Food Delivery Tipping Guide',
  description: 'Free delivery tip calculator for food delivery services. Calculate appropriate tips for Uber Eats, DoorDash, Grubhub, and other delivery services.',
  alternates: {
    canonical: 'https://tipcalculator.page/delivery',
  },
};

export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Delivery Tip Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate food delivery tips for DoorDash, Uber Eats, Grubhub, and all delivery services.
        </p>
      </div>

      <TipCalculator initialScene="delivery" />

      <div className="max-w-4xl mx-auto mt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Tipping Guide</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our delivery tip calculator helps you determine the right tip amount for food delivery services. Whether you're ordering from Uber Eats, DoorDash, Grubhub, or local restaurants, proper tipping ensures delivery drivers receive fair compensation. Use this delivery tip calculator to calculate tips based on order size, distance, and service quality.
          </p>
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Delivery Tip Guidelines:</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>10-15%</strong> - Standard food delivery tip</li>
              <li><strong>$3-5 minimum</strong> - For small orders under $20</li>
              <li><strong>15-20%</strong> - Bad weather or long distance</li>
              <li><strong>20%+</strong> - Large orders or exceptional service</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate Delivery Tips</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Using a delivery tip calculator simplifies the tipping process. Enter your food delivery order total, and the calculator suggests appropriate tip percentages. Consider factors like delivery distance, weather conditions, and order complexity when calculating your delivery tip. Our delivery tip calculator provides recommendations for various delivery scenarios.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For food delivery services, calculate tips on the subtotal before fees and taxes. The delivery tip calculator accounts for the base order amount, ensuring drivers receive appropriate compensation regardless of platform fees.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Service Tipping</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">DoorDash Tipping</h3>
              <p className="text-gray-700">
                For DoorDash delivery, tip 10-20% of your order total. DoorDash allows you to add tips before or after delivery. Use our delivery tip calculator to determine appropriate DoorDash tips based on service quality and order size.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Uber Eats Tipping</h3>
              <p className="text-gray-700">
                Uber Eats delivery drivers rely on tips for income. Tip 15-20% for good service. The delivery tip calculator helps you calculate fair Uber Eats tips considering distance and delivery speed.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Grubhub & Other Services</h3>
              <p className="text-gray-700">
                For Grubhub and other food delivery platforms, standard tipping is 10-20%. Use the delivery tip calculator to ensure your delivery driver receives appropriate compensation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Factors Affecting Delivery Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Weather Conditions</h3>
              <p className="text-sm text-gray-700">
                Delivery drivers working in rain, snow, or extreme weather deserve higher tips. Add 5-10% extra to your delivery tip when conditions are challenging. Our delivery tip calculator helps account for these factors.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Delivery Distance</h3>
              <p className="text-sm text-gray-700">
                Longer delivery distances require more time and fuel. Consider tipping more for deliveries beyond 5 miles. The delivery tip calculator considers distance in tip recommendations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Order Size</h3>
              <p className="text-sm text-gray-700">
                Large food delivery orders require more effort. Tip at least 15-20% on large orders. Use the delivery tip calculator to calculate appropriate tips for any order size.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Service Quality</h3>
              <p className="text-sm text-gray-700">
                Fast, accurate delivery with good communication deserves higher tips. The delivery tip calculator provides recommendations based on standard service expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Delivery Tip Calculator Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Calculate delivery tips instantly for all food delivery services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Recommendations for DoorDash, Uber Eats, Grubhub, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Consider order size, distance, and weather in delivery tip calculations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Ensure fair compensation for delivery drivers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Free delivery tip calculator - no app downloads needed</span>
            </li>
          </ul>
        </section>

        <div className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Delivery Tip</h2>
          <p className="text-gray-700 mb-6">
            Use our free delivery tip calculator for all food delivery services. Ensure your delivery driver receives fair tips based on service quality and delivery conditions.
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Back to Main Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
