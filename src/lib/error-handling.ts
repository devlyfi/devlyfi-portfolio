/**
 * Error handling utilities for data fetching and component errors
 */

export class DataFetchError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'DataFetchError';
  }
}

/**
 * Safe data fetcher with error handling
 */
export async function safeFetch<T>(
  fetcher: () => Promise<T>,
  fallback: T,
  errorMessage?: string
): Promise<T> {
  try {
    return await fetcher();
  } catch (error) {
    console.error(errorMessage || 'Data fetch error:', error);
    return fallback;
  }
}

/**
 * Get item by slug with error handling
 */
export function getItemBySlug<T extends { slug: string }>(
  items: T[],
  slug: string
): T | null {
  try {
    return items.find((item) => item.slug === slug) || null;
  } catch (error) {
    console.error('Error finding item by slug:', error);
    return null;
  }
}

/**
 * Validate required data exists
 */
export function validateData<T>(
  data: T | null | undefined,
  errorMessage: string
): T {
  if (!data) {
    throw new DataFetchError(errorMessage, 404);
  }
  return data;
}

/**
 * Handle async component errors gracefully
 */
export async function withErrorBoundary<T>(
  asyncFn: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await asyncFn();
  } catch (error) {
    console.error('Component error:', error);
    return fallback;
  }
}

/**
 * Log error to monitoring service (placeholder for future integration)
 */
export function logError(
  error: Error,
  context?: Record<string, unknown>
): void {
  // In production, integrate with error monitoring service like Sentry
  console.error('Application error:', {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  });
}
