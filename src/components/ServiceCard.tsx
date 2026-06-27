"use client";

import { motion } from "framer-motion";
import { Clock, Tag, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import styles from "./ServiceCard.module.css";
import { Service } from "@/data/services";

interface ServiceCardProps {
    service: Service;
    onClick: () => void;
}

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
    // Dynamically get the icon component
    const IconComponent = (Icons as any)[service.icon] || Icons.Smile;

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={styles.card}
            onClick={onClick}
        >
            <div className={styles.iconContainer}>
                <IconComponent size={48} className={styles.serviceIcon} />
                <span className={styles.categoryBadge}>{service.category}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{service.name}</h3>
                    <p className={styles.price}>
                        <span className={styles.amount}>Rs. {service.price.toLocaleString()}</span>
                    </p>
                </div>

                <p className={styles.description}>{service.description}</p>

                <div className={styles.specs}>
                    <div className={styles.specItem}>
                        <Clock size={16} />
                        <span>{service.duration}</span>
                    </div>
                    <div className={styles.specItem}>
                        <Tag size={16} />
                        <span>{service.category}</span>
                    </div>
                </div>

                <button className={styles.bookBtn}>
                    Book Appointment
                </button>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
