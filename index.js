export default function createObjectIdFromDate(date) {
  // Validate date parameter
  date = new Date(date);
  if (date.toString() === "Invalid Date") {
    throw new Error("Invalid Date");
  }

  // Convert time from ms to seconds
  const timeInSeconds = date.getTime() / 1000;

  if (timeInSeconds < 1) throw new Error("Date must be after July 5. 1978");

  // Convert seconds to a hex string
  const hexTimestamp = Math.floor(timeInSeconds).toString(16);

  // Create an ObjectId by padding the hex timestamp with 16 zeros
  // Total length will be 24 characters
  return hexTimestamp + "0000000000000000";
}
