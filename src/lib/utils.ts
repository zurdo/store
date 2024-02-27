import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "ARS";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "ARS", notation = "standard" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 0,
  }).format(numericPrice);

  return formattedPrice.replace(/\s/g, "");
}
