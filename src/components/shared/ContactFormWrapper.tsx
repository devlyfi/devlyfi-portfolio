'use client';

import dynamic from 'next/dynamic';

// Lazy load ContactForm as it's heavy with form validation
const ContactForm = dynamic(() => import('@/components/shared/ContactForm'), {
  loading: () => (
    <div className="space-y-4">
      <div className="h-12 bg-muted animate-pulse rounded" />
      <div className="h-12 bg-muted animate-pulse rounded" />
      <div className="h-12 bg-muted animate-pulse rounded" />
      <div className="h-32 bg-muted animate-pulse rounded" />
      <div className="h-12 bg-muted animate-pulse rounded w-32" />
    </div>
  ),
  ssr: false,
});

export default function ContactFormWrapper() {
  return <ContactForm />;
}
