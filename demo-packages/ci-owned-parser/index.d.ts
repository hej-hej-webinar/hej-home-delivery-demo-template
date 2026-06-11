export type DeliveryPreference = {
  customerId: string | undefined;
  dropoffWindow: string;
  instructions: string;
};

export function parseDeliveryPreferences(input: string): DeliveryPreference[];