# Tip Calculator

A fast, easy, and accurate online tip calculator built with Next.js. Calculate tips, split bills, and determine the perfect gratuity for any service.

**Live Site:** [tipcalculator.page](https://tipcalculator.page)

## Features

- **Instant Tip Calculation** - Real-time calculation as you type
- **Bill Splitting** - Divide bills and tips evenly among multiple people
- **Multiple Currencies** - Support for USD, EUR, GBP, CAD, AUD, and JPY
- **Scene-Based Recommendations** - Preset tip percentages for restaurants, delivery, taxi, and beauty services
- **Calculation History** - Save and review your past calculations (stored locally)
- **Mobile-First Design** - Fully responsive, works perfectly on all devices
- **SEO Optimized** - Server-side rendering for fast load times and search engine visibility
- **100% Free** - No registration, no ads, completely free to use

## Tech Stack

- **Framework:** Next.js 15.5.5 with App Router
- **UI Library:** React 19.1.0
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Build Tool:** Turbopack
- **Deployment:** Vercel

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page (main calculator)
├── restaurant/             # Restaurant tip calculator
├── delivery/               # Delivery tip calculator
├── percentage/             # Percentage tip calculator
├── guide/                  # Educational guides
│   ├── how-to-calculate-tip/
│   └── tipping-guide-usa/
├── faq/                    # FAQ page
├── sitemap.ts              # Dynamic sitemap generation
├── robots.ts               # Robots.txt configuration
└── manifest.ts             # Web app manifest

components/
├── calculator/             # Calculator components
│   ├── TipCalculator.tsx
│   ├── AmountInput.tsx
│   ├── TipSelector.tsx
│   ├── ResultDisplay.tsx
│   ├── SplitBill.tsx
│   └── SceneSelector.tsx
├── history/                # History management
│   └── HistoryList.tsx
├── ui/                     # Reusable UI components
│   ├── Button.tsx
│   └── Input.tsx
└── layout/                 # Layout components
    ├── Header.tsx
    └── Footer.tsx

lib/
├── calculations.ts         # Core calculation logic
├── storage.ts              # LocalStorage utilities
└── currency.ts             # Currency formatting

types/
└── index.ts                # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tip-calculator.git
cd tip-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production with Turbopack
npm start        # Start production server
```

## Core Calculation Logic

The tip calculator uses a precise calculation formula:

```typescript
export interface TipCalculation {
  billAmount: number;
  tipPercentage: number;
  tipAmount: number;
  totalAmount: number;
  numberOfPeople?: number;
  perPersonTotal?: number;
  perPersonTip?: number;
}

export function calculateTip(
  billAmount: number,
  tipPercentage: number,
  numberOfPeople: number = 1
): TipCalculation {
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  const perPersonTotal = totalAmount / numberOfPeople;
  const perPersonTip = tipAmount / numberOfPeople;

  return {
    billAmount: round(billAmount),
    tipPercentage,
    tipAmount: round(tipAmount),
    totalAmount: round(totalAmount),
    numberOfPeople,
    perPersonTotal: round(perPersonTotal),
    perPersonTip: round(perPersonTip),
  };
}
```

## SEO & Performance

This project is optimized for search engines and performance:

- **Server-Side Rendering (SSR)** - Fast initial page loads
- **Semantic HTML** - Proper heading hierarchy and structure
- **Schema.org Markup** - Rich snippets for search results
- **Open Graph Tags** - Social media preview optimization
- **Dynamic Sitemap** - Automatically generated sitemap.xml
- **Core Web Vitals** - Optimized for LCP, FID, and CLS
- **Mobile-First** - Responsive design for all devices

### Target Keywords

- tip calculator (368K monthly searches)
- calculate tip
- restaurant tip calculator
- delivery tip calculator
- tip percentage calculator
- bill splitter

## Common Tipping Guidelines

### Restaurant Service
- **Standard:** 15-20%
- **Good service:** 18-20%
- **Exceptional service:** 25%+

### Delivery Services
- **Standard:** 10-15%
- **Minimum:** $3-5 for small orders
- **Consider:** Weather, distance, difficulty

### Taxi & Rideshare
- **Standard:** 10-15%
- **Extra:** For luggage assistance

### Beauty & Spa
- **Standard:** 15-20%
- **Salon owners:** Optional but appreciated

## Browser Support

- Chrome (last 2 versions)
- Safari (last 2 versions)
- Firefox (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 13+
- Android Chrome 8+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts: [Geist Sans & Geist Mono](https://vercel.com/font)

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ for people who love accurate tipping**
