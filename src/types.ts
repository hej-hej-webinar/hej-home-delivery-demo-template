export type HealthResponse = {
  status: "ok";
  service: "hej-home-delivery";
};

export type DeliveryPreference = {
  customerId?: string;
  dropoffWindow: string;
  instructions: string;
};