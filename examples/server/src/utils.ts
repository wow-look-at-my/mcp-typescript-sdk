/**
 * Utility functions shared across server examples.
 */

/**
 * Sleep for the specified number of milliseconds.
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
