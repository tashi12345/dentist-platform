"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, UserCircle } from "lucide-react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { useAuth } from "@/lib/AuthContext";
import { BRAND_CONFIG } from "@/data/config";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, profile } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Logo size={40} className={styles.logoIcon} />
                    <div className={styles.logoText}>
                        <span className={styles.brandName}>{BRAND_CONFIG.clinicName.toUpperCase()}</span>
                        <span className={styles.brandSub}>{BRAND_CONFIG.tagline.toUpperCase()}</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/#services" className={styles.navLink}>Services</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                    {user ? (
                        <Link href="/my-appointments" className={styles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <UserCircle size={18} />
                            My Appointments
                        </Link>
                    ) : (
                        <Link href="/auth" className={styles.navLink} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <UserCircle size={18} />
                            Sign In
                        </Link>
                    )}
                    <a href={`tel:${BRAND_CONFIG.phone}`} className="btn-primary">
                        <Phone size={18} />
                        <span>Book Now</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    {user ? (
                        <Link href="/my-appointments" onClick={() => setIsMobileMenuOpen(false)}>My Appointments</Link>
                    ) : (
                        <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                    )}
                    <a href={`tel:${BRAND_CONFIG.phone}`} className="btn-primary">Book Now</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
