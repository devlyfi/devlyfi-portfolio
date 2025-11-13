import { Button } from '@/components/ui/button';

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

export function ErrorFallback({
  title = 'Unable to Load Content',
  message = 'We encountered an error while loading this content. Please try again.',
  showRetry = true,
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        {showRetry && onRetry && (
          <Button
            onClick={onRetry}
            className="bg-primary hover:bg-primary-600"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

export function DataNotFound({
  title = 'Content Not Found',
  message = 'The content you are looking for could not be found.',
  backLink = '/',
  backText = 'Go Back',
}: {
  title?: string;
  message?: string;
  backLink?: string;
  backText?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <Button asChild className="bg-primary hover:bg-primary-600">
          <a href={backLink}>{backText}</a>
        </Button>
      </div>
    </div>
  );
}

export function LoadingError({
  message = 'Failed to load data',
}: {
  message?: string;
}) {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="text-center">
        <p className="text-sm text-red-600">{message}</p>
      </div>
    </div>
  );
}
