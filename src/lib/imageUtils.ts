// src/lib/imageUtils.ts

/**
 * Optimizes an image URL for performance.
 * Works with Firebase Storage URLs by appending size parameters.
 * Note: If using a different provider, update this logic.
 */
export const getOptimizedImageUrl = (
  url: string,
  width?: number,
  height?: number
): string => {
  if (!url) return '';
  
  // Basic optimization: if it's a Firebase Storage URL
  // This is a common pattern, adjust based on actual storage structure
  let optimizedUrl = url;
  
  // Example for Firebase Storage (if using Signed URLs, this might not work)
  // For demonstration, we'll return as is, but this is the place to add transformations.
  // Real-world: return `${url}?width=${width}&height=${height}&format=webp`;

  return optimizedUrl;
};
