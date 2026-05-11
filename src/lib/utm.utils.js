const STORAGE_KEY = 'incruiter_utm';
const EXPIRY_DAYS = 7;

/**
 * Extracts UTM parameters from URL search params
 * @param {URLSearchParams} searchParams - Next.js useSearchParams() result
 * @returns {Object} Object containing UTM parameters
 */
export function extractUTMParams(searchParams) {
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const result = {};

  utmParams.forEach((param) => {
    const value = searchParams?.get(param);
    if (value && value.trim() !== '') {
      result[param] = value.trim();
    }
  });

  return result;
}

/**
 * Gets the current timestamp in milliseconds
 * @returns {number}
 */
function getTimestamp() {
  return Date.now();
}

/**
 * Calculates expiry timestamp
 * @param {number} days - Number of days until expiry
 * @returns {number}
 */
function getExpiryTimestamp(days = EXPIRY_DAYS) {
  return getTimestamp() + days * 24 * 60 * 60 * 1000;
}

/**
 * Parses stored UTM data from localStorage
 * @returns {Object|null}
 */
function parseStoredData() {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    return JSON.parse(stored);
  } catch (error) {
    console.warn('[UTM] Error parsing stored data:', error);
    return null;
  }
}

/**
 * Checks if stored data has expired
 * @param {Object} data - Stored UTM data
 * @returns {boolean}
 */
function isExpired(data) {
  if (!data?.expiry || !data?.timestamp) return true;
  return getTimestamp() > data.expiry;
}

/**
 * Stores UTM data in localStorage with expiry
 * @param {Object} data - UTM data to store
 */
function storeData(data) {
  if (typeof window === 'undefined') return;

  try {
    const payload = {
      ...data,
      timestamp: getTimestamp(),
      expiry: getExpiryTimestamp(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('[UTM] Error storing data:', error);
  }
}

/**
 * Retrieves all UTM data from storage
 * Returns first-touch and last-touch data along with metadata
 * @returns {Object|null}
 */
export function getUTM() {
  const data = parseStoredData();

  if (!data || isExpired(data)) {
    return null;
  }

  return {
    first_utm: data.first_utm || null,
    last_utm: data.last_utm || null,
    timestamp: data.timestamp,
    expiry: data.expiry,
  };
}

/**
 * Sets UTM data in storage
 * Handles first-touch (only set once) and last-touch (always update) logic
 * @param {Object} utmParams - UTM parameters from URL
 */
export function setUTM(utmParams) {
  if (typeof window === 'undefined') return;

  if (!utmParams || Object.keys(utmParams).length === 0) {
    return;
  }

  const existingData = parseStoredData();
  const hasExistingFirst = existingData?.first_utm && Object.keys(existingData.first_utm).length > 0;

  const dataToStore = {
    first_utm: hasExistingFirst ? existingData.first_utm : utmParams,
    last_utm: utmParams,
  };

  storeData(dataToStore);
}

/**
 * Clears UTM data from storage
 */
export function clearUTM() {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('[UTM] Error clearing data:', error);
  }
}

/**
 * Gets referrer as fallback UTM source
 * @returns {Object|null}
 */
export function getReferrerUTM() {
  if (typeof window === 'undefined') return null;

  const referrer = document.referrer;

  if (!referrer || referrer === '') {
    return null;
  }

  // Only capture external referrers (not from same domain)
  try {
    const referrerUrl = new URL(referrer);
    const currentUrl = typeof window !== 'undefined' ? new URL(window.location.href) : null;

    if (currentUrl && referrerUrl.hostname === currentUrl.hostname) {
      return null;
    }
  } catch (error) {
    return null;
  }

  return {
    utm_source: 'referrer',
    utm_medium: 'referral',
    utm_referrer: referrer,
  };
}

/**
 * Gets UTM data formatted for form submission or API calls
 * Flattens first and last touch into a single object
 * @returns {Object}
 */
export function getUTMForSubmission() {
  const utmData = getUTM();

  if (!utmData) {
    return {};
  }

  const result = {};

  // Add first touch data with first_ prefix
  if (utmData.first_utm) {
    Object.entries(utmData.first_utm).forEach(([key, value]) => {
      result[`first_${key}`] = value;
    });
  }

  // Add last touch data (overwrites first touch if same keys)
  if (utmData.last_utm) {
    Object.entries(utmData.last_utm).forEach(([key, value]) => {
      result[key] = value;
    });
  }

  return result;
}