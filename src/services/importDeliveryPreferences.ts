import type { DeliveryPreference } from "../types";

export function importDeliveryPreferences(csvText: string): DeliveryPreference[] {
  return csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [customerId, dropoffWindow, instructions] = line.split(",");

      return {
        customerId: customerId?.trim(),
        dropoffWindow: dropoffWindow?.trim() ?? "unknown",
        instructions: instructions?.trim() ?? ""
      };
    })
    .filter((entry) => Boolean(entry.customerId));
}