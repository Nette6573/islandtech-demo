"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

type Booking = {
  id: string;
  fullName: string;
  businessName?: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  createdAt?: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const password = "admin123";
    const input = prompt("Enter admin password");

    if (input === password) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
    }
  }, []);

  useEffect(() => {
    if (!authorized) return;

    const fetchBookings = async () => {
      try {
        const q = query(
          collection(db, "bookings"),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);

        const data: Booking[] = [];

        querySnapshot.forEach((doc) => {
          const bookingData = doc.data() as Omit<Booking, "id">;

          data.push({
            id: doc.id,
            ...bookingData,
          });
        });

        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [authorized]);

  if (!authorized) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Access Denied</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Admin Dashboard
        </h1>

        {loading ? (
          <p>Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <div className="grid gap-4">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h2 className="text-xl font-semibold text-purple-600 mb-2">
                  {booking.fullName}
                </h2>

                <p><strong>Business:</strong> {booking.businessName || "N/A"}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>

                {booking.notes && (
                  <p className="mt-2 text-gray-600">
                    <strong>Notes:</strong> {booking.notes}
                  </p>
                )}
              </div>
            ))}

          </div>
        )}

      </div>

    </main>
  );
}