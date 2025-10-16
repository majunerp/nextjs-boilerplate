import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tipping Guide USA - When and How Much to Tip',
  description: 'Complete tipping guide for the United States. Learn tipping etiquette, standard percentages, and when to tip for all services in the USA.',
  alternates: {
    canonical: 'https://tipcalculator.page/guide/tipping-guide-usa',
  },
};

export default function TippingGuideUSAPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Tipping Guide USA: When and How Much to Tip
        </h1>

        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comprehensive tipping guide for the United States. Learn tipping etiquette, standard percentages, and situations when tipping is expected.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Tipping Culture</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tipping is deeply embedded in American culture. In the USA, tipping is expected in many service industries because workers often receive lower base wages with the expectation of earning tips. Understanding USA tipping etiquette helps you navigate social situations and ensure fair compensation for service workers.
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard USA Tipping Rates:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Restaurants:</strong> 15-20% of pre-tax bill</li>
                <li><strong>Bars:</strong> $1-2 per drink or 15-20% of tab</li>
                <li><strong>Food Delivery:</strong> 10-15% ($3-5 minimum)</li>
                <li><strong>Taxi/Uber:</strong> 10-15% of fare</li>
                <li><strong>Hair Salon:</strong> 15-20% of service cost</li>
                <li><strong>Hotel Staff:</strong> $2-5 per service</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restaurant Tipping in USA</h2>
            <p className="text-gray-700 mb-4">
              Restaurant tipping is mandatory in USA culture. Servers typically earn $2-3 per hour base wage, relying on tips for income. Standard USA restaurant tipping is 15-20%, with 18% being most common. Use our <Link href="/restaurant" className="text-green-600 hover:underline">restaurant tip calculator</Link> to determine appropriate amounts.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Fine Dining in USA</h3>
                <p className="text-sm text-gray-700">
                  Fine dining in the USA expects 20% or higher tips. For exceptional multi-course meals, 25% tips are appropriate. Consider tipping sommelier separately (15% of wine bill) at upscale USA restaurants.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Casual Dining USA</h3>
                <p className="text-sm text-gray-700">
                  Casual USA restaurants expect 15-18% tips. Fast casual and counter-service restaurants in the USA may have tip jars - tipping is optional, typically $1-2.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Delivery Service Tipping</h2>
            <p className="text-gray-700 mb-4">
              Food delivery tipping in the USA typically ranges from 10-15% with a $3-5 minimum. USA delivery drivers for DoorDash, Uber Eats, and Grubhub rely heavily on tips. Factors affecting USA delivery tips include distance, weather, and order size.
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li><strong>Standard delivery:</strong> 10-15% of order</li>
              <li><strong>Bad weather USA:</strong> 15-20% for rain, snow, or extreme conditions</li>
              <li><strong>Large orders:</strong> 15-20% for orders over $50</li>
              <li><strong>Long distance:</strong> Add $2-5 for deliveries beyond 5 miles in USA</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Hotel Tipping Guide</h2>
            <p className="text-gray-700 mb-4">
              Tipping hotel staff is standard practice in the USA. Here's a comprehensive USA hotel tipping guide:
            </p>
            <div className="space-y-3">
              <div className="flex items-start bg-gray-50 p-4 rounded">
                <span className="font-semibold text-gray-900 min-w-[180px]">Housekeeping USA:</span>
                <span className="text-gray-700">$2-5 per night, left daily in envelope marked "Housekeeping"</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded">
                <span className="font-semibold text-gray-900 min-w-[180px]">Bellhop USA:</span>
                <span className="text-gray-700">$2-3 per bag, minimum $5 total</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded">
                <span className="font-semibold text-gray-900 min-w-[180px]">Doorman USA:</span>
                <span className="text-gray-700">$1-2 for hailing taxi, $2-3 for help with luggage</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded">
                <span className="font-semibold text-gray-900 min-w-[180px]">Valet USA:</span>
                <span className="text-gray-700">$2-5 when car is returned</span>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded">
                <span className="font-semibold text-gray-900 min-w-[180px]">Concierge USA:</span>
                <span className="text-gray-700">$5-10 for restaurant reservations, $10-20 for hard-to-get tickets</span>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Service Industry Tipping</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Hair Salons in USA</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Tip 15-20% to hairstylists in the USA. If someone washes your hair, tip them $3-5 separately. Tip salon owners 15-20% - tipping owners is becoming more common in the USA.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">USA Spa Services</h3>
                <p className="text-gray-700 text-sm mb-2">
                  For massages, facials, and spa treatments in the USA, tip 15-20%. Some USA spas include gratuity automatically - check your bill before tipping additionally.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Taxi & Rideshare USA</h3>
                <p className="text-gray-700 text-sm mb-2">
                  In the USA, tip taxi drivers 10-15% of fare. For Uber and Lyft in the USA, 10-15% is standard. Add extra for help with luggage or exceptional USA rideshare service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">USA Coffee Shops</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Tipping at USA coffee shops is optional. Most Americans leave $1-2 in tip jars for complex drinks. Simple drip coffee doesn't require tips in the USA.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When NOT to Tip in USA</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Fast food in USA</strong> - Tipping not expected at fast food restaurants</li>
                <li>• <strong>USA retail stores</strong> - Don't tip retail sales associates</li>
                <li>• <strong>Takeout from USA restaurants</strong> - Optional small tip ($1-2) but not required</li>
                <li>• <strong>USA gas stations</strong> - No tipping for self-service gas</li>
                <li>• <strong>Flight attendants in USA</strong> - Tipping airline staff is not allowed</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Tipping by State</h2>
            <p className="text-gray-700 mb-4">
              While USA tipping customs are generally consistent nationwide, some regional variations exist:
            </p>
            <div className="space-y-3 text-gray-700">
              <p><strong>Major USA Cities</strong> - New York, Los Angeles, Chicago, San Francisco tend to tip 18-20% as standard</p>
              <p><strong>Southern USA States</strong> - Tipping culture is strong; 15-20% is standard across the South</p>
              <p><strong>Western USA</strong> - Generally follows national USA tipping standards of 15-20%</p>
              <p><strong>Midwest USA</strong> - Tipping customs align with national USA averages</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">USA Tipping Calculator</h2>
            <p className="text-gray-700 mb-4">
              Use our <Link href="/" className="text-green-600 hover:underline">USA tip calculator</Link> to ensure you're tipping appropriately according to American standards. The calculator helps you calculate tips for restaurants, delivery, and all USA services quickly and accurately.
            </p>
          </section>

          <div className="bg-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate USA-Standard Tips</h2>
            <p className="text-gray-700 mb-6">
              Use our tip calculator to calculate appropriate tips following USA tipping etiquette. Ensure fair compensation for USA service workers.
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
