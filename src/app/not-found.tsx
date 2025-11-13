import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="text-9xl font-bold text-primary">404</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-primary hover:bg-primary-600">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/about"
              className="text-sm text-primary hover:underline"
            >
              About
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/works"
              className="text-sm text-primary hover:underline"
            >
              Recent Works
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline"
            >
              Blog
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              href="/contact"
              className="text-sm text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
