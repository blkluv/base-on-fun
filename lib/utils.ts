import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}m`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}k`
  } else {
    return num.toFixed(2)
  }
}

export function formatPercentage(num: number): string {
  return `${num >= 0 ? "+" : ""}${num.toFixed(2)}%`
}

