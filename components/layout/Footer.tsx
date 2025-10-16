import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Tip Calculator</h3>
            <p className="text-sm text-gray-600">
              Fast and easy tip calculator for restaurants, delivery, and more.
              Calculate tips and split bills instantly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/restaurant" className="text-gray-600 hover:text-green-600">
                  Restaurant Tip Calculator
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-gray-600 hover:text-green-600">
                  Delivery Tip Calculator
                </Link>
              </li>
              <li>
                <Link href="/percentage" className="text-gray-600 hover:text-green-600">
                  Tip Percentage Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guide/how-to-calculate-tip" className="text-gray-600 hover:text-green-600">
                  How to Calculate Tip
                </Link>
              </li>
              <li>
                <Link href="/guide/tipping-guide-usa" className="text-gray-600 hover:text-green-600">
                  Tipping Guide USA
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">About</h4>
            <p className="text-sm text-gray-600 mb-4">
              Free online tip calculator to help you calculate tips quickly and accurately.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} TipCalculator.page. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
