"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BRAND_CONFIG } from "@/data/config";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(collection(db, "contactMessages"), {
                ...formData,
                read: false,
                createdAt: serverTimestamp()
            });
            setSuccess(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div style={{ minHeight: '100vh', paddingTop: '120px', padding: '120px 24px 60px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '16px', textAlign: 'center' }}>
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '60px', textAlign: 'center' }}>
                        We'd love to hear from you. Reach out anytime!
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
                        <a href={`tel:${BRAND_CONFIG.phone}`} className="premium-card" style={{ padding: '32px', textAlign: 'center', display: 'block' }}>
                            <Phone size={32} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
                            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Phone</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{BRAND_CONFIG.phone}</p>
                        </a>

                        <a href={`https://wa.me/${BRAND_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="premium-card" style={{ padding: '32px', textAlign: 'center', display: 'block' }}>
                            <MessageCircle size={32} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
                            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>WhatsApp</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Message Us</p>
                        </a>

                        <a href={`mailto:${BRAND_CONFIG.email}`} className="premium-card" style={{ padding: '32px', textAlign: 'center', display: 'block' }}>
                            <Mail size={32} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
                            <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Email</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{BRAND_CONFIG.email}</p>
                        </a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        <div className="premium-card" style={{ padding: '40px' }}>
                            <MapPin size={24} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Address</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{BRAND_CONFIG.address}</p>

                            <Clock size={24} style={{ color: 'var(--primary)', marginTop: '24px', marginBottom: '16px' }} />
                            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Hours</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Mon-Fri: {BRAND_CONFIG.hours.weekdays}<br />
                                Saturday: {BRAND_CONFIG.hours.saturday}<br />
                                Sunday: {BRAND_CONFIG.hours.sunday}
                            </p>
                        </div>

                        <div className="premium-card" style={{ padding: '40px' }}>
                            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Send Us a Message</h3>
                            {success ? (
                                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--primary)', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '32px' }}>✓</div>
                                    <p>Message sent successfully!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '12px', color: '#fff', fontSize: '15px' }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '12px', color: '#fff', fontSize: '15px' }}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="03xx xxxxxxx"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '12px', color: '#fff', fontSize: '15px' }}
                                    />
                                    <textarea
                                        placeholder="Your message..."
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '12px 16px', borderRadius: '12px', color: '#fff', fontSize: '15px', resize: 'vertical' }}
                                    />
                                    <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center' }}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
