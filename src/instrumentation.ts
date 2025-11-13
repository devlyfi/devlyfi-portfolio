/**
 * Instrumentation file for Next.js
 * This runs once when the server starts
 * Used for performance monitoring and error tracking
 */

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side instrumentation
    console.log('[Instrumentation] Server runtime initialized');
    
    // Initialize performance monitoring
    if (process.env.NODE_ENV === 'production') {
      // Setup performance monitoring tools
      // Example: New Relic, DataDog, etc.
      console.log('[Instrumentation] Performance monitoring enabled');
    }
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime instrumentation
    console.log('[Instrumentation] Edge runtime initialized');
  }
}

export const onRequestError = async (
  err: Error,
  _request: Request,
  context: {
    routerKind: 'Pages Router' | 'App Router';
    routePath: string;
    routeType: 'render' | 'route' | 'action' | 'middleware';
  }
) => {
  // Log errors for monitoring
  const errorInfo = {
    error: err.message,
    stack: err.stack,
    route: context.routePath,
    type: context.routeType,
    routerKind: context.routerKind,
    timestamp: new Date().toISOString(),
  };

  console.error('[Error]', errorInfo);

  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Sentry
    // Sentry.captureException(err, { contexts: { nextjs: context } });
    
    // Example: Send to custom error tracking endpoint
    // try {
    //   await fetch('/api/error-tracking', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(errorInfo),
    //   });
    // } catch (trackingError) {
    //   console.error('Failed to send error to tracking service:', trackingError);
    // }
  }
};
