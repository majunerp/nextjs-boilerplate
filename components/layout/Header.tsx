import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tip Calculator"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-green-600">
              tipcalculator<span className="text-gray-900">.page</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/restaurant"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Restaurant
            </Link>
            <Link
              href="/delivery"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Delivery
            </Link>
            <Link
              href="/guide/how-to-calculate-tip"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Guide
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
