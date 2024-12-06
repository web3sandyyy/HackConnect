import FingerprintJS from '@fingerprintjs/fingerprintjs';

// Function to get a visitor ID
export const getVisitorId = async () => {
  // Initialize the agent
  const fp = await FingerprintJS.load();

  // Get the visitor identifier
  const result = await fp.get();

  // Return the visitor ID
  return result.visitorId;
};
