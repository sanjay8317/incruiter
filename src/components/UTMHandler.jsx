'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, Suspense } from 'react';
import { extractUTMParams, setUTM, getReferrerUTM } from '@/lib/utm.utils';

/**
 * Inner component that uses useSearchParams
 * Must be wrapped in Suspense per Next.js requirements
 */
function UTMHandlerInner() {
  const searchParams = useSearchParams();

  const utmParams = useMemo(() => {
    return extractUTMParams(searchParams);
  }, [searchParams]);

  useEffect(() => {
    if (Object.keys(utmParams).length > 0) {
      setUTM(utmParams);
      return;
    }

    const referrerUTM = getReferrerUTM();
    if (referrerUTM) {
      setUTM(referrerUTM);
    }
  }, [utmParams]);

  return null;
}

/**
 * UTMHandler - Auto-runs on app load to capture and store UTM parameters
 *
 * This component:
 * - Extracts UTM params from URL on page load
 * - Stores them in localStorage with first/last touch logic
 * - Falls back to document.referrer if no UTM params exist
 * - Does not render any UI
 * - Wrapped in Suspense for Next.js SSR compatibility
 *
 * Usage: Place this component in your root layout
 */
export default function UTMHandler() {
  return (
    <Suspense fallback={null}>
      <UTMHandlerInner />
    </Suspense>
  );
}