import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Calculate Tip: Complete Guide with Examples',
  description: 'Learn how to calculate tips with our complete guide. Includes formulas, examples, mental math tricks, and tipping etiquette for all situations.',
  alternates: {
    canonical: 'https://tipcalculator.page/guide/how-to-calculate-tip',
  },
};

export default function HowToCalculateTipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          How to Calculate Tip: Complete Guide
        </h1>

        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Learn how to calculate tip amounts quickly and accurately. This comprehensive guide covers tip calculation formulas, mental math methods, and tipping etiquette for various services.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Basic Tip Calculation Formula</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The fundamental formula to calculate tip is simple. To calculate tip, multiply your bill amount by the tip percentage (expressed as a decimal). The tip calculation formula is: <strong>Tip Amount = Bill Amount × (Tip Percentage ÷ 100)</strong>. This tip calculation method works for any percentage you choose to tip.
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tip Calculation Examples:</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>15% tip on $40 bill:</strong> $40 × 0.15 = $6.00 tip</li>
                <li><strong>18% tip on $75 bill:</strong> $75 × 0.18 = $13.50 tip</li>
                <li><strong>20% tip on $50 bill:</strong> $50 × 0.20 = $10.00 tip</li>
                <li><strong>25% tip on $100 bill:</strong> $100 × 0.25 = $25.00 tip</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Once you calculate tip amount, add it to your original bill to determine the total payment. Using our <Link href="/" className="text-green-600 hover:underline">tip calculator</Link> automates this calculation process.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Mental Math to Calculate Tip</h2>
            <p className="text-gray-700 mb-4">
              You can calculate tip without a calculator using these mental math tricks. These tip calculation shortcuts help you quickly estimate appropriate tip amounts:
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Calculate 10% Tip (Easiest Method)</h3>
                <p className="text-gray-700 mb-2">
                  To calculate 10% tip, simply move the decimal point one place to the left. This is the foundation for calculating other tip percentages.
                </p>
                <p className="text-sm text-gray-600">
                  Example: For a $45.00 bill, 10% tip = $4.50 (move decimal left)
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Calculate 15% Tip</h3>
                <p className="text-gray-700 mb-2">
                  To calculate 15% tip: First calculate 10% tip, then add half of that amount. This method makes it easy to calculate 15% tips mentally.
                </p>
                <p className="text-sm text-gray-600">
                  Example: $60 bill → 10% = $6.00 → half of $6 = $3.00 → 15% tip = $9.00
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Calculate 20% Tip</h3>
                <p className="text-gray-700 mb-2">
                  To calculate 20% tip: Calculate 10% tip and double it. This is the fastest way to calculate 20% tips.
                </p>
                <p className="text-sm text-gray-600">
                  Example: $35 bill → 10% = $3.50 → double = $7.00 (20% tip)
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Calculate 18% Tip</h3>
                <p className="text-gray-700 mb-2">
                  To calculate 18% tip: Calculate 20% tip, then subtract 10% of the 20% amount. Or calculate 10% tip and add 8%.
                </p>
                <p className="text-sm text-gray-600">
                  Example: $50 bill → 20% = $10.00 → subtract $1.00 = $9.00 (18% tip)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-Step: How to Calculate Tip</h2>
            <p className="text-gray-700 mb-4">
              Follow these steps to calculate tip accurately for any bill:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-6">
              <li className="pl-2">
                <strong>Check your bill amount</strong> - Look at the subtotal before taxes and fees. Some people calculate tip on the pre-tax amount, others on the total.
              </li>
              <li className="pl-2">
                <strong>Decide on tip percentage</strong> - Standard is 15-20% for restaurants. Calculate tip percentage based on service quality.
              </li>
              <li className="pl-2">
                <strong>Calculate tip amount</strong> - Use the formula: bill × (percentage ÷ 100) or use mental math tricks.
              </li>
              <li className="pl-2">
                <strong>Add tip to bill</strong> - Calculate total payment by adding tip amount to original bill.
              </li>
              <li className="pl-2">
                <strong>Round if desired</strong> - You can round up to the nearest dollar when you calculate tip for convenience.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Tip for Different Services</h2>
            <p className="text-gray-700 mb-4">
              How you calculate tip varies by service type. Here's how to calculate tip for common situations:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Restaurant Service</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: 15-20% of bill</p>
                <p className="text-xs text-gray-600">
                  For restaurant dining, calculate tip based on pre-tax amount. Use 15% for acceptable service, 18-20% for good service. Calculate 20%+ tip for excellent restaurant service.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Delivery Services</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: 10-15% ($3-5 minimum)</p>
                <p className="text-xs text-gray-600">
                  To calculate delivery tip, use 10-15% of order total with a $3-5 minimum. Calculate higher tips (15-20%) for bad weather or long distances.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Taxi/Rideshare</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: 10-15% of fare</p>
                <p className="text-xs text-gray-600">
                  Calculate tip for taxi or rideshare at 10-15% of the total fare. Calculate additional tip for help with luggage or exceptional service.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Hair Salon/Spa</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: 15-20% of service cost</p>
                <p className="text-xs text-gray-600">
                  Calculate tip for salon services at 15-20% of the service price. Some calculate separate tips for shampoo assistants (few dollars) and stylists (15-20%).
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Bartender</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: $1-2 per drink or 15-20% of tab</p>
                <p className="text-xs text-gray-600">
                  Calculate bartender tip at $1-2 per drink, or calculate 15-20% tip on the total tab for multiple drinks.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Hotel Housekeeping</h3>
                <p className="text-sm text-gray-700 mb-2">Calculate tip: $2-5 per night</p>
                <p className="text-xs text-gray-600">
                  Calculate housekeeping tip at $2-5 per night, left daily rather than at checkout. Calculate higher tips for messy rooms or special requests.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mistakes When You Calculate Tip</h2>
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-semibold text-gray-900 mb-1">Calculating tip on post-tax amount</p>
                <p className="text-sm text-gray-700">
                  Many people calculate tip on the total including tax. It's acceptable to calculate tip on the pre-tax subtotal to reduce the amount.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-semibold text-gray-900 mb-1">Not adjusting when you calculate tip for poor service</p>
                <p className="text-sm text-gray-700">
                  If service is poor, calculate tip at 10-12% rather than standard 15-20%. Calculate lower tips for genuinely poor service, but tip something unless service was unacceptable.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-semibold text-gray-900 mb-1">Forgetting to calculate tip for takeout</p>
                <p className="text-sm text-gray-700">
                  For takeout orders, calculate a smaller tip (10% or few dollars) for the effort of packaging your order.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When You Should Calculate Higher Tips</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Exceptional service</strong> - Calculate 25%+ tip when service exceeds expectations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Complex orders</strong> - Calculate higher tip percentages for complicated special requests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Large groups</strong> - Calculate 18-20% minimum tip for parties of 6+ people</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Difficult conditions</strong> - Calculate 20%+ tip during busy hours, bad weather, or holidays</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>Regular customer</strong> - Calculate generous tips for servers who know you and provide excellent service</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Using a Calculator to Calculate Tip</h2>
            <p className="text-gray-700 mb-4">
              While mental math is useful, using a tip calculator ensures accuracy. Our <Link href="/" className="text-green-600 hover:underline">free tip calculator</Link> helps you calculate tip amounts instantly. Simply enter your bill amount and select your desired tip percentage - the calculator will calculate tip and total for you.
            </p>
            <p className="text-gray-700 mb-4">
              A tip calculator is especially helpful when you need to calculate tip for odd amounts, split bills, or calculate custom tip percentages. The calculator eliminates errors when you calculate tip in busy restaurants or when splitting bills with groups.
            </p>
          </section>

          <div className="bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Tip Easily</h2>
            <p className="text-gray-700 mb-6">
              Use our free tip calculator to calculate tips accurately. No need to do mental math - just enter your bill and calculate tip instantly!
            </p>
            <Link href="/" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Use Tip Calculator
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
