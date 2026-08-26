import type { Metadata } from 'next';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';

export const metadata: Metadata = {
  title: 'SunHarvest — A Taste of Indian Summers',
  description:
    'Connecting Indian agricultural produce with the power of sunshine to create nutrition-focused food concepts for everyday life.',
  keywords: [
    'SunHarvest',
    'Solar Dried',
    'Indian Agriculture',
    'Nutrition Mix',
    'Iron+',
    'Mother+',
    'Grow+',
    'Natural Food',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sun-cream text-sun-charcoal font-sans antialiased selection:bg-sun-gold selection:text-white">
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
