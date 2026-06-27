export interface Appointment {
  id?: string;

  // Customer Info
  name: string;
  email: string;
  phone: string;

  // Appointment Details
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  date: string; // ISO date format "2026-07-15"
  timeSlot: string; // "10:00 AM - 10:30 AM"
  notes?: string;

  // Status
  status: "pending" | "confirmed" | "cancelled" | "completed";

  // Meta
  userId?: string;
  createdAt?: any;
  confirmedAt?: any;
  completedAt?: any;
}
