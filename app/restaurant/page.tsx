import type { Metadata } from 'next';
import { TipCalculator } from '@/components/calculator/TipCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Tip Calculator | Calculate Tips for Dining',
  description: 'Restaurant tip calculator for dining. Calculate tips instantly with support for different service levels & bill splitting. Free & easy to use.',
  alternates: {
    canonical: 'https://tipcalculator.page/restaurant',
  },
};

export default function RestaurantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Restaurant Tip Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate restaurant tips accurately. Perfect for dining out, fine dining, and casual restaurants.
        </p>
      </div>

      <TipCalculator initialScene="restaurant" />

      <div className="max-w-4xl mx-auto mt-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurant Tipping Guide</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Using a restaurant tip calculator ensures you tip appropriately based on service quality. Restaurant tipping is a standard practice in many countries, with 15-20% being the typical range for sit-down dining. Our restaurant tip calculator helps you calculate the perfect tip for your dining experience.
            </p>
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Restaurant Tip Percentages:</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>15%</strong> - Acceptable service in a restaurant</li>
                <li><strong>18%</strong> - Good service (recommended standard)</li>
                <li><strong>20%</strong> - Excellent restaurant service</li>
                <li><strong>25%+</strong> - Exceptional service or fine dining</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Calculate Restaurant Tips</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our restaurant tip calculator makes tipping simple. Enter your restaurant bill amount, select the appropriate tip percentage based on service quality, and the calculator instantly computes your tip and total. For group dining, use the split function to divide the restaurant bill evenly.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When dining at a restaurant, consider these factors: service quality, wait time, food quality, and special accommodations. A restaurant tip calculator helps ensure fair compensation for your server based on your dining experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurant Tipping Etiquette</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Fine Dining Restaurants</h3>
              <p className="text-gray-700">
                At fine dining restaurants, tip 20% or more. Consider tipping additional amounts for sommelier service or coat check. Use our restaurant tip calculator to accurately determine appropriate tips for upscale dining experiences.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Casual Dining</h3>
              <p className="text-gray-700">
                For casual restaurant dining, 15-18% is standard. Our restaurant tip calculator helps you quickly determine the right amount based on your bill total and desired tip percentage.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Buffet Restaurants</h3>
              <p className="text-gray-700">
                At buffet restaurants, tip 10-15% since service is more limited. The restaurant tip calculator adjusts for different service levels.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Restaurant Bill Splitting</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When dining with a group at a restaurant, our calculator makes bill splitting effortless. Simply enter the total restaurant bill, select your tip percentage, and specify the number of people. The restaurant tip calculator automatically calculates each person's share, including their portion of the tip.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This feature is perfect for group restaurant outings, business dinners, or family meals. The calculator ensures everyone pays their fair share of both the restaurant bill and the tip.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Restaurant Tip Calculator</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Instant calculations for restaurant tips - no mental math required</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Pre-set percentages for common restaurant tipping scenarios</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Easy bill splitting for group restaurant dining</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Works for all types of restaurants - fine dining to casual</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>Free restaurant tip calculator - no registration needed</span>
            </li>
          </ul>
        </section>

        <div className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Restaurant Tip Now</h2>
          <p className="text-gray-700 mb-6">
            Use our free restaurant tip calculator to ensure appropriate tipping at any restaurant. Whether dining alone or with a group, calculate tips accurately every time.
          </p>
          <Link href="/" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Try Other Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
