// Add Demo Data Script
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, Timestamp } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

async function addDemoData() {
  console.log('🔧 Initializing Firebase...');
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  try {
    console.log('📝 Adding demo appointments...');

    // Demo Appointments
    const appointments = [
      {
        name: "Ali Raza",
        email: "ali.raza@example.com",
        phone: "+92 300 1234567",
        serviceName: "Teeth Cleaning",
        date: "2026-07-02",
        timeSlot: "10:00 AM",
        status: "confirmed",
        notes: "First time patient, please be gentle",
        createdAt: Timestamp.fromDate(new Date('2026-06-25'))
      },
      {
        name: "Sara Ahmed",
        email: "sara.ahmed@example.com",
        phone: "+92 321 9876543",
        serviceName: "Teeth Whitening",
        date: "2026-07-03",
        timeSlot: "2:00 PM",
        status: "pending",
        notes: "Interested in professional whitening treatment",
        createdAt: Timestamp.fromDate(new Date('2026-06-26'))
      },
      {
        name: "Hassan Malik",
        email: "hassan.malik@example.com",
        phone: "+92 333 4567890",
        serviceName: "Root Canal",
        date: "2026-07-05",
        timeSlot: "11:00 AM",
        status: "confirmed",
        notes: "Experiencing tooth pain on lower left molar",
        createdAt: Timestamp.fromDate(new Date('2026-06-27'))
      },
      {
        name: "Fatima Khan",
        email: "fatima.khan@example.com",
        phone: "+92 345 1122334",
        serviceName: "Braces Consultation",
        date: "2026-06-30",
        timeSlot: "3:00 PM",
        status: "confirmed",
        notes: "Daughter needs braces, wants to discuss options",
        createdAt: Timestamp.fromDate(new Date('2026-06-23'))
      },
      {
        name: "Usman Tariq",
        email: "usman.tariq@example.com",
        phone: "+92 301 5566778",
        serviceName: "Dental Checkup",
        date: "2026-07-01",
        timeSlot: "9:00 AM",
        status: "confirmed",
        notes: "Regular checkup, no issues",
        createdAt: Timestamp.fromDate(new Date('2026-06-24'))
      }
    ];

    for (const apt of appointments) {
      await addDoc(collection(db, 'appointments'), apt);
      console.log(`✅ Added appointment for ${apt.name}`);
    }

    console.log('\n📧 Adding demo contact messages...');

    // Demo Contact Messages
    const messages = [
      {
        name: "Ahmed Hussain",
        email: "ahmed.h@example.com",
        phone: "+92 312 9988776",
        message: "Hi, I'm interested in getting dental implants. What is the cost and procedure? Can I schedule a consultation?",
        read: false,
        createdAt: Timestamp.fromDate(new Date('2026-06-27'))
      },
      {
        name: "Zainab Farooq",
        email: "zainab.f@example.com",
        phone: "+92 334 7766554",
        message: "Do you offer emergency dental services? I have a severe toothache and need immediate attention.",
        read: true,
        createdAt: Timestamp.fromDate(new Date('2026-06-26'))
      },
      {
        name: "Bilal Sheikh",
        email: "bilal.sheikh@example.com",
        phone: "+92 300 4455667",
        message: "I would like to know more about your teeth whitening packages. What are the prices and how long does the treatment take?",
        read: false,
        createdAt: Timestamp.fromDate(new Date('2026-06-28'))
      }
    ];

    for (const msg of messages) {
      await addDoc(collection(db, 'contactMessages'), msg);
      console.log(`✅ Added message from ${msg.name}`);
    }

    console.log('\n🎉 Demo data added successfully!\n');
    console.log('Visit your admin dashboard to see the data:');
    console.log('https://dentist-platform-six.vercel.app/admin/login\n');

    process.exit(0);

  } catch (error) {
    console.error('❌ Error adding demo data:', error.message);
    process.exit(1);
  }
}

addDemoData();
