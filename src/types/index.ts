export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircuts' | 'treatments' | 'colouring' | 'grooming' | 'skin';
  priceStarting: number;
  duration: string;
  description: string;
  popular?: boolean;
  idealFor?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  source: 'Google Business Profile' | 'Local Directory';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'treatments' | 'colouring' | 'grooming';
  imageUrl: string;
  description: string;
}

export interface BusinessDetails {
  name: string;
  shortName: string;
  tagline: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  googleRating: number;
  reviewCount: number;
  openingHours: {
    days: string;
    hours: string;
  };
}
