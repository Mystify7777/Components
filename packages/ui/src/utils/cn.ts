import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names with Tailwind CSS support.
 * Uses clsx for conditional classes and twMerge to handle conflicting Tailwind utilities.
 *
 * @param inputs - Class name inputs (strings, objects, arrays, etc.)
 * @returns Merged class string
 *
 * @example
 * cn('px-2 py-1', 'px-3') // => 'py-1 px-3' (px-3 wins via twMerge)
 * cn('text-lg', { 'font-bold': true }) // => 'text-lg font-bold'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default cn;
