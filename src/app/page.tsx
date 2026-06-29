"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AppointmentModal from "@/components/AppointmentModal";
import { SERVICES_DATA, Service } from "@/data/services";
import { BRAND_CONFIG } from "@/data/config";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  CreditCard,
  CheckCircle,
  Rocket,
  Calendar,
  FileText,
  Bell,
  Smartphone,
  ClipboardList,
  Languages,
  Palette,
  Sparkles,
  DollarSign,
  Users,
  Package,
  Activity
} from "lucide-react";

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero />

      {/* Demo Banner - Roman Urdu */}
      <section style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
        padding: '32px 24px',
        borderTop: '3px solid #fbbf24',
        borderBottom: '3px solid #fbbf24'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              fontSize: 'clamp(20px, 4vw, 28px)',
              fontWeight: 800,
              marginBottom: '12px',
              color: '#000',
              textShadow: '0 2px 4px rgba(255,255,255,0.3)'
            }}>
              یہ ایک DEMO platform ہے!
            </h3>
            <p style={{
              fontSize: 'clamp(16px, 3vw, 20px)',
              marginBottom: '20px',
              color: '#1a1a1a',
              fontWeight: 600
            }}>
              Aap apni Dental Clinic ke liye customize karwa sakte hain!
            </p>
            <p style={{
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              marginBottom: '24px',
              color: '#0a0a0a',
              fontStyle: 'italic'
            }}>
              This is a DEMO platform - customize it for YOUR dental clinic!
            </p>
            <button
              className="btn-primary"
              style={{
                background: '#000',
                color: '#fff',
                padding: '16px 32px',
                fontSize: '18px',
                fontWeight: 700,
                border: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
              onClick={() => window.open(`https://wa.me/923290841889?text=Hi! I want to customize this Dental Clinic platform for my business!`, '_blank')}
            >
              <MessageCircle size={24} />
              WhatsApp Par Contact Karein
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Updated for Dental Clinic */}
      <section id="services" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
            Hamare <span className="gradient-text">Dental Services</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
            Comprehensive dental care with state-of-the-art technology and experienced professionals
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} onClick={() => handleBookClick(service)} />
            </motion.div>
          ))}
        </div>
      </section>

      <AppointmentModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* How It Works Section - Roman Urdu */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              <span className="gradient-text">Kaise Kaam Karta Hai?</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
              How It Works - Simple 4-Step Process
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                step: "1",
                icon: <Send size={48} />,
                title: "WhatsApp Par Requirements Bhejein",
                titleEn: "Send Requirements on WhatsApp",
                desc: "Apni dental clinic ke liye kya features chahiye, WhatsApp par batayein"
              },
              {
                step: "2",
                icon: <CreditCard size={48} />,
                title: "50% Advance Payment Karein",
                titleEn: "Pay 50% Advance (Rs 25,000)",
                desc: "EasyPaisa, JazzCash ya Bank Transfer se Rs 25,000 advance payment"
              },
              {
                step: "3",
                icon: <CheckCircle size={48} />,
                title: "2-3 Din Mein Prototype Dekh Kar Changes Karwayein",
                titleEn: "Review Prototype & Request Changes",
                desc: "Platform dekh kar apni marzi ke changes karwayein"
              },
              {
                step: "4",
                icon: <Rocket size={48} />,
                title: "Baqi Payment Kar Ke Platform Live Karein",
                titleEn: "Final Payment & Go Live",
                desc: "Remaining payment kar ke apna platform live karein aur patients ko impress karein!"
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '40px 32px', textAlign: 'center', position: 'relative' }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 800,
                  border: '4px solid #0a0a0a'
                }}>
                  {step.step}
                </div>
                <div style={{ color: 'var(--primary)', marginBottom: '20px', marginTop: '12px' }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '12px', fontStyle: 'italic' }}>
                  {step.titleEn}
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ marginTop: '60px', textAlign: 'center' }}
          >
            <h4 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: 'var(--primary)' }}>
              Payment Methods Available
            </h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>💳</div>
                <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>EasyPaisa</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>💰</div>
                <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>JazzCash</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🏦</div>
                <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Bank Transfer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Features Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              <span className="gradient-text">Apni Marzi Ke Features</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
              Custom Features You Can Add - Apni dental clinic ke liye customize karein!
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {[
              { icon: <Calendar size={40} />, title: "Online Appointment Booking", desc: "Patients khud online appointments book kar sakein" },
              { icon: <FileText size={40} />, title: "Patient Dental Records", desc: "Har patient ka complete dental history digital form mein" },
              { icon: <Activity size={40} />, title: "Treatment History Tracking", desc: "Previous treatments aur procedures ka complete record" },
              { icon: <ClipboardList size={40} />, title: "X-ray & Reports Online", desc: "Dental X-rays aur lab reports online upload karein" },
              { icon: <Bell size={40} />, title: "Payment Reminders", desc: "Automatic payment reminders via SMS/WhatsApp" },
              { icon: <Smartphone size={40} />, title: "SMS/WhatsApp Notifications", desc: "Appointment reminders aur updates" },
              { icon: <Users size={40} />, title: "Multiple Dentist Schedules", desc: "Different dentists ke time slots manage karein" },
              { icon: <Palette size={40} />, title: "Custom Branding", desc: "Apne clinic ka naam, logo, colors customize karein" },
              { icon: <Package size={40} />, title: "Treatment Packages", desc: "Special dental packages aur offers display karein" },
              { icon: <Sparkles size={40} />, title: "And Much More...", desc: "Aur bhi bohot features add kar sakte hain!" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '32px', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ color: '#fff', marginBottom: '12px', fontSize: '18px', fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '60px' }}
          >
            <button
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#fff',
                padding: '20px 40px',
                fontSize: '20px',
                fontWeight: 800,
                border: 'none',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px'
              }}
              onClick={() => window.open(`https://wa.me/923290841889?text=Hi! I want to discuss custom features for my dental clinic platform!`, '_blank')}
            >
              <MessageCircle size={28} />
              Apni Requirements WhatsApp Par Bhejein!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '60px', textAlign: 'center', fontWeight: 800 }}>
            Why Choose <span className="gradient-text">{BRAND_CONFIG.clinicName}</span>?
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              { title: "Certified Dentists", desc: "Highly qualified and experienced dental professionals" },
              { title: "Modern Equipment", desc: "Latest technology for precise and painless treatments" },
              { title: "Affordable Rates", desc: "Quality dental care at competitive prices" },
              { title: "Flexible Hours", desc: `${BRAND_CONFIG.hours.weekdays} | ${BRAND_CONFIG.hours.saturday}` }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '32px', textAlign: 'center' }}
              >
                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '20px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: 'var(--surface)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              What Our <span className="gradient-text">Patients Say</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
              Real experiences from our valued patients
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                name: "Ayesha Khan",
                treatment: "Teeth Whitening",
                text: "Amazing experience! The staff was so professional and caring. My teeth look brilliant now. Highly recommend!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
              },
              {
                name: "Ahmed Hassan",
                treatment: "Root Canal",
                text: "I was nervous about the root canal but Dr. made it completely painless. Great clinic with modern equipment.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
              },
              {
                name: "Fatima Malik",
                treatment: "Dental Checkup",
                text: "Very clean facility and friendly staff. The dentist explained everything clearly. Will definitely come back!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
                style={{ padding: '32px' }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ marginBottom: '4px', fontSize: '18px' }}>{testimonial.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{testimonial.treatment}</p>
                  </div>
                </div>
                <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                  {"★".repeat(testimonial.rating)}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
            Our <span className="gradient-text">Clinic Gallery</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
            State-of-the-art facilities and modern dental equipment
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1609107683888-1c6c40fbd2c7?q=80&w=800&auto=format&fit=crop"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '280px',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                className="premium-card"
              >
                <img
                  src={img}
                  alt={`Clinic ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Roman Urdu */}
      <section style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 50%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', marginBottom: '16px', textAlign: 'center', fontWeight: 800 }}>
              <span className="gradient-text">Price aur Payment</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px', fontSize: '18px' }}>
              Affordable pricing for your custom dental clinic platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="premium-card"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(234, 88, 12, 0.05) 100%)',
              backdropFilter: 'blur(10px)',
              border: '2px solid var(--secondary)',
              borderRadius: '24px',
              padding: '60px 40px',
              textAlign: 'center'
            }}
          >
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Total Development Cost
              </div>
              <div style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, color: 'var(--secondary)', marginBottom: '8px' }}>
                Rs 50,000 - 80,000
              </div>
              <div style={{ fontSize: '16px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                Features ke hisaab se price vary hoti hai
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '16px',
              padding: '32px',
              marginBottom: '40px',
              border: '1px solid rgba(249, 115, 22, 0.3)'
            }}>
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                  <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
                    <DollarSign size={20} style={{ display: 'inline', marginRight: '8px' }} />
                    50% Advance Payment
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--secondary)' }}>Rs 25,000</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                  <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
                    <Rocket size={20} style={{ display: 'inline', marginRight: '8px' }} />
                    Delivery Time
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--primary)' }}>4-7 Days</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', color: 'var(--text-muted)' }}>
                    <CheckCircle size={20} style={{ display: 'inline', marginRight: '8px' }} />
                    Final Payment
                  </span>
                  <span style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>On Delivery</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--secondary)' }}>
                Payment Methods
              </h4>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', minWidth: '120px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '8px' }}>💳</div>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>EasyPaisa</p>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', minWidth: '120px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '8px' }}>💰</div>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>JazzCash</p>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', minWidth: '120px' }}>
                  <div style={{ fontSize: '40px', marginBottom: '8px' }}>🏦</div>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Bank Transfer</p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '32px'
            }}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Bank Account Number
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace', letterSpacing: '1px' }}>
                PK87UNIL0109000352281883
              </div>
            </div>

            <button
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                color: '#000',
                padding: '20px 40px',
                fontSize: '20px',
                fontWeight: 800,
                border: 'none',
                boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                width: '100%',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
              onClick={() => window.open(`https://wa.me/923290841889?text=Hi! I want to get pricing details for my dental clinic platform!`, '_blank')}
            >
              <MessageCircle size={28} />
              Get Started - WhatsApp Karein!
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Updated with All Demo Platforms */}
      <footer style={{ padding: '80px 24px 40px', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>
              <span className="gradient-text">Gieek Software Solutions</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              We create custom platforms for businesses across Pakistan
            </p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h4 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: 'var(--primary)' }}>
              Our Demo Platforms
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { name: "Veterinary Clinic", url: "https://vet-clinic-six.vercel.app", icon: "🐾", desc: "For pet care and vet clinics" },
                { name: "Wedding Banquet", url: "https://banquet-tan.vercel.app", icon: "💒", desc: "For banquet halls and events" },
                { name: "Beauty Parlour", url: "https://parlour-platform.vercel.app", icon: "💅", desc: "For salons and beauty services" },
                { name: "Dental Clinic", url: "#", icon: "🦷", desc: "For dentists and dental clinics", isCurrent: true },
                { name: "Skincare Clinic", url: "https://skincare-platform-two.vercel.app", icon: "✨", desc: "For dermatologists and skincare" }
              ].map((platform, i) => (
                <div
                  key={i}
                  className="premium-card"
                  style={{
                    padding: '24px',
                    textAlign: 'center',
                    cursor: platform.isCurrent ? 'default' : 'pointer',
                    border: platform.isCurrent ? '2px solid var(--primary)' : undefined
                  }}
                  onClick={() => !platform.isCurrent && window.open(platform.url, '_blank')}
                >
                  <div style={{ fontSize: '48px', marginBottom: '12px' }}>{platform.icon}</div>
                  <h5 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                    {platform.name}
                    {platform.isCurrent && <span style={{ fontSize: '12px', color: 'var(--primary)', marginLeft: '8px' }}>(Current)</span>}
                  </h5>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div>
              <h4 style={{ marginBottom: '20px', color: 'var(--primary)', fontSize: '18px' }}>About Us</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Professional web development services for businesses in Pakistan. Custom platforms at affordable prices.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: 'var(--primary)', fontSize: '18px' }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ color: 'var(--text-muted)' }}>Custom Web Development</li>
                <li style={{ color: 'var(--text-muted)' }}>Appointment Booking Systems</li>
                <li style={{ color: 'var(--text-muted)' }}>Business Management Platforms</li>
                <li style={{ color: 'var(--text-muted)' }}>Mobile-Friendly Websites</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: 'var(--primary)', fontSize: '18px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                <li>
                  <a href="https://wa.me/923290841889" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MessageCircle size={18} />
                    +92 329 0841889
                  </a>
                </li>
                <li>Islamabad, Pakistan</li>
                <li>Available 24/7 on WhatsApp</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', color: 'var(--primary)', fontSize: '18px' }}>Why Choose Us?</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                <li>✓ Fast Delivery (4-7 days)</li>
                <li>✓ Affordable Pricing</li>
                <li>✓ Custom Features</li>
                <li>✓ Professional Support</li>
              </ul>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            paddingTop: '40px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', fontWeight: 600 }}>
              © {new Date().getFullYear()} Gieek Software Solutions. All rights reserved.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              Made with ❤️ in Pakistan for Pakistani businesses
            </p>
            <button
              className="btn-primary"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#fff',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onClick={() => window.open(`https://wa.me/923290841889?text=Hi! I want to discuss a custom platform for my business!`, '_blank')}
            >
              <MessageCircle size={20} />
              Start Your Project Today
            </button>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/923290841889`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} color="#fff" />
      </a>
    </>
  );
}
