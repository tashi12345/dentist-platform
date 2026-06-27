"use client";

import Navbar from "@/components/Navbar";
import { BRAND_CONFIG } from "@/data/config";
import { Award, Users, Clock, Heart } from "lucide-react";

export default function About() {
    return (
        <>
            <Navbar />
            <div style={{ minHeight: '100vh', paddingTop: '120px', padding: '120px 24px 60px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>
                        About <span className="gradient-text">{BRAND_CONFIG.clinicName}</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.8', marginBottom: '48px', textAlign: 'center' }}>
                        {BRAND_CONFIG.tagline}
                    </p>

                    <div className="premium-card" style={{ padding: '48px', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--primary)' }}>Our Story</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                            At {BRAND_CONFIG.clinicName}, we believe that everyone deserves a healthy, beautiful smile.
                            Located in the heart of {BRAND_CONFIG.city}, we have been serving the community with exceptional
                            dental care for years.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.8' }}>
                            Our team of experienced dentists uses the latest technology and techniques to provide
                            comprehensive dental services in a comfortable, welcoming environment.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                        {[
                            { icon: Award, title: "Certified Experts", desc: "Highly qualified dental professionals" },
                            { icon: Users, title: "Patient Focused", desc: "Your comfort is our priority" },
                            { icon: Clock, title: "Flexible Hours", desc: "Convenient appointment times" },
                            { icon: Heart, title: "Quality Care", desc: "Excellence in every treatment" }
                        ].map((item, i) => (
                            <div key={i} className="premium-card" style={{ padding: '32px', textAlign: 'center' }}>
                                <item.icon size={40} style={{ color: 'var(--primary)', margin: '0 auto 16px' }} />
                                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="premium-card" style={{ padding: '48px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Visit Us Today</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                            {BRAND_CONFIG.address}
                        </p>
                        <a href="/#services" className="btn-primary">Book an Appointment</a>
                    </div>
                </div>
            </div>
        </>
    );
}
