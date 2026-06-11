export type HealthResponse = {
  status: "ok";
  service: "hej-home-delivery";
};

export type CustomerRecord = {
  customerId: string;
  fullName: string;
  email: string;
  phone: string;
  nationalIdentifier: string;
  address: {
    line1: string;
    city: string;
    postcode: string;
  };
  loyaltyTier: "Bronze" | "Silver" | "Gold";
};

export type DeliveryPreference = {
  customerId?: string;
  dropoffWindow: string;
  instructions: string;
};