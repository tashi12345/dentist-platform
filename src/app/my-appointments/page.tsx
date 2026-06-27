"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { db } from "@/lib/firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { Calendar, Clock, X } from "lucide-react";
import { BRAND_CONFIG } from "@/data/config";

interface Appointment {
    id: string;
    serviceName: string;
    date: string;
    timeSlot: string;
    status: string;
    servicePrice: number;
    createdAt: any;
}

export default function MyAppointments() {
    const { user, profile, loading: authLoading } = useAuth();
    const router = useRouter();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/auth");
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (!user || !db) return;

        const q = query(
            collection(db, "appointments"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const appointmentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Appointment));
            setAppointments(appointmentsData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    if (authLoading || loading) {
        return (
            <>
                <Navbar />
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-muted)' }}>Loading...</p>
                </div>
            </>
        );
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed': return '#4ade80';
            case 'pending': return '#fbbf24';
            case 'cancelled': return '#ef4444';
            case 'completed': return '#60a5fa';
            default: return 'var(--text-muted)';
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ minHeight: '100vh', paddingTop: '120px', padding: '120px 24px 60px', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '12px' }}>
                    My <span className="gradient-text">Appointments</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '48px', fontSize: '18px' }}>
                    Manage and track your dental appointments with {BRAND_CONFIG.clinicName}
                </p>

                {appointments.length === 0 ? (
                    <div className="premium-card" style={{ padding: '60px 40px', textAlign: 'center' }}>
                        <Calendar size={48} style={{ color: 'var(--primary)', margin: '0 auto 24px' }} />
                        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>No Appointments Yet</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                            Book your first appointment to get started
                        </p>
                        <a href="/#services" className="btn-primary">Browse Services</a>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {appointments.map(apt => (
                            <div key={apt.id} className="premium-card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <h3 style={{ fontSize: '20px', fontWeight: 700 }}>{apt.serviceName}</h3>
                                        <span style={{
                                            background: getStatusColor(apt.status) + '22',
                                            color: getStatusColor(apt.status),
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            fontSize: '12px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase'
                                        }}>
                                            {apt.status}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '24px', color: 'var(--text-muted)', fontSize: '14px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Calendar size={14} />
                                            {new Date(apt.date).toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <Clock size={14} />
                                            {apt.timeSlot}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary)' }}>
                                        Rs. {apt.servicePrice.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
