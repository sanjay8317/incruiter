'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { extractUTMParams, setUTM, getReferrerUTM } from '@/lib/utm.utils';

/**
 * UTMHandler - Auto-runs on app load to capture and store UTM parameters
 *
 * This component:
 * - Extracts UTM params from URL on page load
 * - Stores them in localStorage with first/last touch logic
 * - Falls back to document.referrer if no UTM params exist
 * - Does not render any UI
 *
 * Usage: Place this component in your root layout to ensure it runs on every page load
 */
export default function UTMHandler() {
  const searchParams = useSearchParams();

  // Memoize the UTM params to prevent unnecessary re-renders
  const utmParams = useMemo(() => {
    return extractUTMParams(searchParams);
  }, [searchParams]);

  useEffect(() => {
    // Extract and store UTM params from URL
    if (Object.keys(utmParams).length > 0) {
      setUTM(utmParams);
      return;
    }

    // Fallback: capture document.referrer if no UTM params exist
    const referrerUTM = getReferrerUTM();
    if (referrerUTM) {
      setUTM(referrerUTM);
    }
  }, [utmParams]);

  // This component does not render anything
  return null;
}