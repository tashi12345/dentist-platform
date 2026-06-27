"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, Mail, LogIn, Clock, MessageSquare, MessageCircle } from "lucide-react";
import styles from "./AppointmentModal.module.css";
import { Service } from "@/data/services";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@/lib/AuthContext";
import { getAvailableSlots } from "@/data/timeSlots";
import { BRAND_CONFIG } from "@/data/config";
import Link from "next/link";

interface AppointmentModalProps {
    service: Service | null;
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentModal = ({ service, isOpen, onClose }: AppointmentModalProps) => {
    const { user, profile } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: "",
        notes: ""
    });
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Auto-fill from logged-in user profile
    useEffect(() => {
        if (user && profile) {
            setFormData(prev => ({
                ...prev,
                name: profile.name || prev.name,
                email: profile.email || user.email || prev.email,
                phone: profile.phone || prev.phone,
            }));
        }
    }, [user, profile]);

    // Fetch available time slots when date changes
    useEffect(() => {
        if (formData.date) {
            setLoadingSlots(true);
            getAvailableSlots(formData.date)
                .then(slots => {
                    setAvailableSlots(slots);
                    setFormData(prev => ({ ...prev, timeSlot: "" }));
                })
                .finally(() => setLoadingSlots(false));
        }
    }, [formData.date]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!service) return;

        setLoading(true);
        setError("");

        try {
            await addDoc(collection(db, "appointments"), {
                ...formData,
                serviceId: service.id,
                serviceName: service.name,
                servicePrice: service.price,
                status: "pending",
                userId: user?.uid || null,
                createdAt: serverTimestamp()
            });
            setSuccess(true);
            // Reset form
            setFormData(prev => ({
                ...prev,
                date: "",
                timeSlot: "",
                notes: ""
            }));
            setTimeout(() => {
                onClose();
                setSuccess(false);
            }, 5000);
        } catch (err) {
            console.error("Appointment error:", err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const today = new Date().toISOString().split("T")[0];

    if (!isOpen || !service) return null;

    const whatsappMessage = `Hi! I'd like to book an appointment for ${service.name} on ${formData.date} at ${formData.timeSlot}.`;
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <AnimatePresence>
            <div className={styles.overlay} onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className={styles.modal}
                    onClick={e => e.stopPropagation()}
                >
                    <button className={styles.closeBtn} onClick={onClose}><X /></button>

                    {success ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h2>Appointment Request Sent!</h2>
                            <p>We will contact you shortly to confirm your appointment.</p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ marginTop: '24px', display: 'inline-flex' }}
                            >
                                <MessageCircle size={18} />
                                Confirm via WhatsApp
                            </a>
                            {user ? (
                                <Link href="/my-appointments" style={{ display: 'inline-block', marginTop: '16px', marginLeft: '16px', color: 'var(--primary)', fontWeight: 600 }}>
                                    View My Appointments →
                                </Link>
                            ) : (
                                <Link href="/auth" style={{ display: 'inline-block', marginTop: '16px', marginLeft: '16px', color: 'var(--primary)', fontWeight: 600 }}>
                                    <LogIn size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                                    Sign up to track appointments
                                </Link>
                            )}
                        </div>
                    ) : (
                        <div className={styles.grid}>
                            <div className={styles.serviceInfo}>
                                <div className={styles.serviceIconPlaceholder}>
                                    <span style={{ fontSize: '64px' }}>🦷</span>
                                </div>
                                <h3>{service.name}</h3>
                                <p className={styles.serviceCategory}>{service.category}</p>
                                <div className={styles.priceTag}>
                                    Rs. {service.price.toLocaleString()}
                                </div>
                                <div className={styles.serviceDetail}>
                                    <Clock size={16} />
                                    <span>{service.duration}</span>
                                </div>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>

                            <div className={styles.formContainer}>
                                <h2>Book Your Appointment</h2>

                                {!user && (
                                    <Link href="/auth" style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        padding: '12px 16px', background: 'rgba(212,175,55,0.08)',
                                        border: '1px solid rgba(212,175,55,0.2)', borderRadius: '12px',
                                        color: 'var(--primary)', fontSize: '13px', fontWeight: 600,
                                        marginBottom: '20px', textDecoration: 'none'
                                    }}>
                                        <LogIn size={16} /> Sign in to auto-fill & track your appointments
                                    </Link>
                                )}

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.inputGroup}>
                                        <label><User size={16} /> Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className={styles.inputRow}>
                                        <div className={styles.inputGroup}>
                                            <label><Phone size={16} /> Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="03xx xxxxxxx"
                                                value={formData.phone}
                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label><Mail size={16} /> Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputRow}>
                                        <div className={styles.inputGroup}>
                                            <label><Calendar size={16} /> Appointment Date</label>
                                            <input
                                                type="date"
                                                required
                                                min={today}
                                                value={formData.date}
                                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label><Clock size={16} /> Time Slot</label>
                                            <select
                                                required
                                                value={formData.timeSlot}
                                                onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                                                disabled={!formData.date || loadingSlots}
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid var(--border)',
                                                    padding: '12px 16px',
                                                    borderRadius: '12px',
                                                    color: '#fff',
                                                    fontFamily: 'inherit',
                                                    fontSize: '15px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                <option value="">
                                                    {loadingSlots ? 'Loading...' : formData.date ? 'Select time' : 'Select date first'}
                                                </option>
                                                {availableSlots.map(slot => (
                                                    <option key={slot} value={slot} style={{ background: '#0f0f0f' }}>
                                                        {slot}
                                                    </option>
                                                ))}
                                                {formData.date && availableSlots.length === 0 && !loadingSlots && (
                                                    <option disabled>No slots available</option>
                                                )}
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label><MessageSquare size={16} /> Additional Notes (Optional)</label>
                                        <textarea
                                            placeholder="Any specific concerns or requests..."
                                            value={formData.notes}
                                            onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                            rows={3}
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                border: '1px solid var(--border)',
                                                padding: '12px 16px',
                                                borderRadius: '12px',
                                                color: '#fff',
                                                fontFamily: 'inherit',
                                                fontSize: '15px',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>

                                    {error && <p className={styles.error}>{error}</p>}

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={loading || !formData.date || !formData.timeSlot}
                                    >
                                        {loading ? "Processing..." : "Confirm Appointment"}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AppointmentModal;
