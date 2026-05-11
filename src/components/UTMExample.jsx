'use client';

import { useState } from 'react';
import { getUTMForSubmission, clearUTM } from '@/lib/utm.utils';

/**
 * Example component demonstrating UTM tracking usage
 *
 * This shows how to:
 * 1. Retrieve UTM data for form submission
 * 2. Attach UTM data to API payload
 * 3. Clear UTM data when needed (e.g., after conversion)
 */
export default function UTMExampleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get UTM data formatted for submission
      const utmData = getUTMForSubmission();

      // Combine form data with UTM data
      const payload = {
        ...formData,
        ...utmData,
        submittedAt: new Date().toISOString(),
      };

      // Simulate API call
      // In production, replace with your actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(payload),
      // });

      console.log('[UTM Example] Submitted payload:', payload);

      // Store submitted data to display
      setSubmittedData(payload);

      // Optionally clear UTM data after successful conversion
      // clearUTM();
    } catch (error) {
      console.error('[UTM Example] Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
        Contact Form with UTM Tracking
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <h3 className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
            Submitted Data (check console for full payload)
          </h3>
          <pre className="text-xs overflow-auto bg-white dark:bg-slate-900 p-2 rounded">
            {JSON.stringify(
              {
                name: submittedData.name,
                email: submittedData.email,
                utm_source: submittedData.utm_source,
                utm_medium: submittedData.utm_medium,
                utm_campaign: submittedData.utm_campaign,
                first_utm_source: submittedData.first_utm_source,
              },
              null,
              2
            )}
          </pre>
        </div>
      )}
    </div>
  );
}

/**
 * Usage Guide:
 *
 * 1. Import the utility functions:
 *    import { getUTMForSubmission, clearUTM } from '@/lib/utm.utils';
 *
 * 2. Get UTM data for API payload:
 *    const utmData = getUTMForSubmission();
 *    const payload = { ...formData, ...utmData };
 *
 * 3. The getUTMForSubmission() returns:
 *    {
 *      first_utm_source: 'google',
 *      first_utm_medium: 'cpc',
 *      first_utm_campaign: 'spring_sale',
 *      utm_source: 'facebook',
 *      utm_medium: 'social',
 *      utm_campaign: 'retargeting',
 *      utm_term: 'hiring software',
 *      utm_content: 'banner_ad'
 *    }
 *
 * 4. Clear UTM after conversion (optional):
 *    clearUTM();
 *
 * 5. URL example with UTM params:
 *    https://yoursite.com/?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale&utm_term=hiring+software&utm_content=banner_ad
 */