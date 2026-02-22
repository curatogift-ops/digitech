import type { Metadata } from 'next';
import { ServiceContent } from './ServiceContent';

export const metadata: Metadata = {
  title: 'Website Development & SEO Services | Digitech Avenue',
  description: 'We provide complete digital solutions for businesses that want strong online presence, better search rankings, and higher customer conversions.',
};

export default function ServicesPage() {
  return <ServiceContent />;
}
