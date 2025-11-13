# Error Handling Documentation

This document describes the comprehensive error handling implementation for the Devlyfi portfolio website.

## Overview

The application implements multiple layers of error handling to ensure a robust user experience:

1. **Global Error Boundary** - Catches critical application errors
2. **Page-Level Error Boundaries** - Handles errors within specific routes
3. **Component Error Boundaries** - Isolates errors in specific components
4. **API Error Handling** - Validates and handles API request errors
5. **404 Not Found Pages** - Custom 404 pages for missing content
6. **Data Fetching Fallbacks** - Graceful degradation for failed data loads

## Error Handling Components

### 1. Global Error Boundary (`app/global-error.tsx`)

Catches critical errors that occur at the root level of the application.

```tsx
// Automatically used by Next.js for root-level errors
```

### 2. Root Error Boundary (`app/error.tsx`)

Handles errors within the main application layout.

```tsx
// Automatically used by Next.js for layout errors
```

### 3. Page-Specific Error Boundaries

Each major section has its own error boundary:
- `app/services/error.tsx` - Services page errors
- `app/works/error.tsx` - Works page errors
- `app/blog/error.tsx` - Blog page errors

### 4. Not Found Page (`app/not-found.tsx`)

Custom 404 page with helpful navigation links.

```tsx
import { notFound } from 'next/navigation';

// In your page component:
if (!data) {
  notFound();
}
```

### 5. Component Error Boundary (`components/shared/SuspenseErrorBoundary.tsx`)

Use this to wrap sections that might fail independently:

```tsx
import { SuspenseErrorBoundary } from '@/components/shared/SuspenseErrorBoundary';

<SuspenseErrorBoundary>
  <YourComponent />
</SuspenseErrorBoundary>
```

### 6. Error Fallback Components (`components/shared/ErrorFallback.tsx`)

Reusable UI components for error states:

```tsx
import { ErrorFallback, DataNotFound, LoadingError } from '@/components/shared/ErrorFallback';

// General error
<ErrorFallback 
  title="Unable to Load Content"
  message="Please try again"
  onRetry={() => refetch()}
/>

// Data not found
<DataNotFound 
  title="Content Not Found"
  backLink="/services"
  backText="View All Services"
/>

// Loading error
<LoadingError message="Failed to load data" />
```

## API Error Handling

The contact form API (`app/api/contact/route.ts`) implements:

1. **Request Validation** - Validates JSON parsing
2. **Schema Validation** - Uses Zod for data validation
3. **Rate Limiting** - Prevents spam (3 requests per minute)
4. **Honeypot Protection** - Detects bot submissions
5. **Error Responses** - Returns appropriate HTTP status codes

### Error Response Format

```typescript
{
  success: false,
  message: "Error description",
  errors?: [{ field: string, message: string }] // For validation errors
}
```

### HTTP Status Codes

- `400` - Bad Request (validation errors, invalid JSON)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error (unexpected errors)

## Error Handling Utilities (`lib/error-handling.ts`)

### DataFetchError Class

Custom error class for data fetching errors:

```typescript
throw new DataFetchError('Failed to load data', 404);
```

### safeFetch

Safely fetch data with fallback:

```typescript
const data = await safeFetch(
  () => fetchData(),
  fallbackData,
  'Failed to load services'
);
```

### getItemBySlug

Safely find items by slug:

```typescript
const item = getItemBySlug(items, slug);
if (!item) {
  notFound();
}
```

### validateData

Validate required data exists:

```typescript
const data = validateData(
  maybeData,
  'Data is required'
);
```

### withErrorBoundary

Wrap async operations with error handling:

```typescript
const result = await withErrorBoundary(
  async () => await fetchData(),
  fallbackValue
);
```

### logError

Log errors to monitoring service:

```typescript
logError(error, { userId, action: 'submit_form' });
```

## Best Practices

### 1. Use notFound() for Missing Data

```typescript
const service = services.find(s => s.slug === params.slug);
if (!service) {
  notFound(); // Triggers not-found.tsx
}
```

### 2. Wrap Risky Components

```tsx
<SuspenseErrorBoundary fallback={<ErrorFallback />}>
  <ComponentThatMightFail />
</SuspenseErrorBoundary>
```

### 3. Handle API Errors Gracefully

```typescript
try {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
} catch (error) {
  // Show user-friendly error message
  toast.error('Failed to submit form');
}
```

### 4. Provide Retry Mechanisms

Always give users a way to retry failed operations:

```tsx
<ErrorFallback 
  onRetry={() => {
    // Reset error state and retry
    reset();
  }}
/>
```

### 5. Log Errors for Monitoring

```typescript
useEffect(() => {
  if (error) {
    logError(error, { page: 'services' });
  }
}, [error]);
```

## Testing Error Handling

### Test 404 Pages

1. Navigate to `/invalid-page` - Should show custom 404
2. Navigate to `/services/invalid-slug` - Should show custom 404
3. Navigate to `/works/invalid-slug` - Should show custom 404
4. Navigate to `/blog/invalid-slug` - Should show custom 404

### Test Error Boundaries

To test error boundaries in development:

```tsx
// Add this to any component to trigger an error
if (testError) {
  throw new Error('Test error');
}
```

### Test API Errors

1. Submit contact form with invalid data - Should show validation errors
2. Submit contact form multiple times quickly - Should hit rate limit
3. Submit contact form with honeypot filled - Should reject silently

## Future Enhancements

1. **Error Monitoring Integration**
   - Integrate with Sentry or similar service
   - Track error rates and patterns
   - Set up alerts for critical errors

2. **Enhanced Logging**
   - Add structured logging
   - Include user context
   - Track error frequency

3. **Offline Support**
   - Detect offline state
   - Show offline-specific UI
   - Queue failed requests

4. **Error Recovery**
   - Automatic retry with exponential backoff
   - Cache fallback data
   - Progressive enhancement

## Related Files

- `src/app/error.tsx` - Root error boundary
- `src/app/global-error.tsx` - Global error boundary
- `src/app/not-found.tsx` - 404 page
- `src/app/*/error.tsx` - Page-specific error boundaries
- `src/lib/error-handling.ts` - Error utilities
- `src/components/shared/ErrorFallback.tsx` - Error UI components
- `src/components/shared/SuspenseErrorBoundary.tsx` - Component error boundary
- `src/app/api/contact/route.ts` - API error handling
