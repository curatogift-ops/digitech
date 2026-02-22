import type { Metadata } from 'next';
import { PortfolioContent } from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Web Design Portfolio & Case Studies | Digitech Avenue',
  description: 'Explore real client projects that demonstrate our design quality, SEO strategy, and business impact. We build websites that perform — not just look good.',
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
