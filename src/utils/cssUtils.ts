import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A helper function to conditionally combine class names.
 * Uses clsx for conditional merging and tailwind-merge to resolve conflicts.
 */
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return twMerge(clsx(inputs));
}
