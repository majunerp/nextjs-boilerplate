import type { Metadata } from 'next';
import { TipCalculator } from '@/components/calculator/TipCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tip Percentage Calculator | Calculate Any Percentage',
  description: 'Free tip percentage calculator. Calculate tips using any percentage from 0-100%. Perfect for calculating custom tip amounts for any service.',
  alternates: {
    canonical: 'https://tipcalculator.page/percentage',
  },
};

export default function PercentagePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Tip Percentage Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate tip amounts using any percentage. Custom tip percentage calculator for all services.
        </p>
      </div>

      <TipCalculator />

      <div className="max-w-4xl mx-auto mt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tip Percentage Calculator Guide</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our tip percentage calculator allows you to calculate tips using any percentage from 0% to 100%. Unlike basic tip calculators with preset percentages, this percentage calculator gives you complete flexibility. Enter your bill amount and desired tip percentage to instantly calculate the exact tip amount and total bill. The tip percentage calculator is perfect when you need precise control over your tipping amount.
          </p>
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Tip Percentages:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p className="font-medium mb-2">Service Industry:</p>
                <ul className="space-y-1 text-sm">
                  <li>• 10% - Minimum acceptable service</li>
                  <li>• 15% - Average service</li>
                  <li>• 18% - Good service (recommended)</li>
                  <li>• 20% - Excellent service</li>
                  <li>• 25%+ - Exceptional service</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Special Situations:</p>
                <ul className="space-y-1 text-sm">
                  <li>• 5% - Counter service</li>
                  <li>• 10-12% - Buffet restaurants</li>
                  <li>• 15-20% - Bartender tips</li>
                  <li>• 20%+ - Holiday tipping bonus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the Tip Percentage Calculator</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The tip percentage calculator is simple to use. Enter your total bill amount in the calculator, then input your desired tip percentage. The percentage calculator instantly computes the tip amount and displays your total bill including the tip. You can adjust the percentage in real-time to see how different tip percentages affect your total.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This percentage calculator also supports bill splitting. If you're dining with a group, enter the number of people, and the calculator shows each person's share of the bill and tip based on your selected percentage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculating Tip Percentages</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Formula for Tip Percentage Calculation</h3>
              <div className="bg-gray-50 p-4 rounded mb-3">
                <code className="text-sm">Tip Amount = Bill Amount × (Tip Percentage ÷ 100)</code>
              </div>
              <p className="text-gray-700 text-sm">
                For example, a 15% tip on a $50 bill: $50 × (15 ÷ 100) = $50 × 0.15 = $7.50. The tip percentage calculator performs this calculation instantly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Mental Math for Common Percentages</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>10% tip</strong> - Move decimal point one place left ($50.00 → $5.00)</li>
                <li><strong>15% tip</strong> - Calculate 10%, then add half of that amount</li>
                <li><strong>20% tip</strong> - Double the 10% amount</li>
                <li><strong>5% tip</strong> - Half of the 10% amount</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                While these mental math tricks work for common percentages, use the tip percentage calculator for exact amounts and custom percentages.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Use Different Tip Percentages</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">10-15% Tip Percentage</h3>
              <p className="text-sm text-gray-700">
                Use a 10-15% tip percentage for counter service, takeout with minimal service, buffet restaurants, or adequate but not exceptional service. The percentage calculator helps determine exact amounts for these lower tip percentages.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">18-20% Tip Percentage</h3>
              <p className="text-sm text-gray-700">
                An 18-20% tip percentage is standard for good to excellent service at restaurants, bars, and personal services. Use the tip percentage calculator to calculate these common amounts accurately.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">25%+ Tip Percentage</h3>
              <p className="text-sm text-gray-700">
                Higher tip percentages (25% or more) are appropriate for exceptional service, complex orders, difficult situations, or holiday gratuities. The percentage calculator makes it easy to calculate generous tips.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Custom Tip Percentages</h3>
              <p className="text-sm text-gray-700">
                Sometimes you need a specific percentage that isn't standard. Our tip percentage calculator accepts any value from 0-100%, perfect for unique tipping situations or personal preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tip Percentage Calculator Examples</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Example 1: 18% Restaurant Tip</h3>
            <p className="text-gray-700 mb-2">Bill: $75.00 | Tip Percentage: 18%</p>
            <p className="text-gray-600 text-sm">
              Using the tip percentage calculator: $75.00 × 0.18 = $13.50 tip | Total: $88.50
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Example 2: 22% Excellent Service</h3>
            <p className="text-gray-700 mb-2">Bill: $42.50 | Tip Percentage: 22%</p>
            <p className="text-gray-600 text-sm">
              Tip percentage calculator result: $42.50 × 0.22 = $9.35 tip | Total: $51.85
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Using a Tip Percentage Calculator</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Calculate tips using any percentage from 0-100% with the percentage calculator</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Instant, accurate calculations - no mental math needed for tip percentages</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>See real-time results as you adjust tip percentage values</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Split bills with custom tip percentages for group situations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Perfect for any tipping scenario requiring specific percentage calculations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Free tip percentage calculator - no downloads or registration</span>
            </li>
          </ul>
        </section>

        <div className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Using the Percentage Calculator</h2>
          <p className="text-gray-700 mb-6">
            Calculate tips using any percentage with our free tip percentage calculator. Perfect for custom tip amounts and precise percentage calculations for any service.
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Try Main Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
