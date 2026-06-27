import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const TIME_SLOTS = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  // Lunch break 12:00 PM - 2:00 PM
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
  "04:00 PM - 04:30 PM",
  "04:30 PM - 05:00 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM"
];

/**
 * Get available time slots for a specific date
 * Filters out slots that are already booked
 */
export async function getAvailableSlots(date: string): Promise<string[]> {
  if (!db) return TIME_SLOTS;

  try {
    const appointmentsRef = collection(db, "appointments");
    const q = query(
      appointmentsRef,
      where("date", "==", date),
      where("status", "in", ["pending", "confirmed"])
    );

    const snapshot = await getDocs(q);
    const bookedSlots = snapshot.docs.map(doc => doc.data().timeSlot);

    return TIME_SLOTS.filter(slot => !bookedSlots.includes(slot));
  } catch (error) {
    console.error("Error fetching available slots:", error);
    return TIME_SLOTS;
  }
}
