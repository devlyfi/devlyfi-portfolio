'use client';

import ContactForm from '@/components/shared/ContactForm';
import AnimatedSection from '@/components/animations/AnimatedSection';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-gray-600">
                Have a project in mind? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <ContactForm
                onSuccess={() => {
                  console.log('Form submitted successfully');
                }}
                onError={(error) => {
                  console.error('Form submission error:', error);
                }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
