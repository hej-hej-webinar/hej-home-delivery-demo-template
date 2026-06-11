function parseDeliveryPreferences(input) {
  return input
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
    });
}

module.exports = {
  parseDeliveryPreferences
};