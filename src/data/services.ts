export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  icon: string;
  available: boolean;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    category: 'Preventive',
    price: 3000,
    duration: '30 min',
    description: 'Professional teeth cleaning and polishing to remove plaque and tartar buildup',
    icon: 'Sparkles',
    available: true
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    category: 'Restorative',
    price: 15000,
    duration: '90 min',
    description: 'Advanced endodontic therapy to save infected or damaged teeth',
    icon: 'Heart',
    available: true
  },
  {
    id: 'dental-checkup',
    name: 'Dental Checkup',
    category: 'Preventive',
    price: 2000,
    duration: '20 min',
    description: 'Comprehensive oral examination and consultation',
    icon: 'Search',
    available: true
  },
  {
    id: 'braces',
    name: 'Braces Installation',
    category: 'Orthodontics',
    price: 80000,
    duration: '60 min',
    description: 'Metal or ceramic braces for teeth alignment and straightening',
    icon: 'Smile',
    available: true
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    category: 'Surgery',
    price: 5000,
    duration: '30 min',
    description: 'Safe and painless tooth removal procedure',
    icon: 'Trash2',
    available: true
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    category: 'Cosmetic',
    price: 12000,
    duration: '45 min',
    description: 'Professional teeth whitening for a brighter, confident smile',
    icon: 'Stars',
    available: true
  }
];
