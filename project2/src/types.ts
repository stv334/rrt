export interface BlueZone {
  id: string;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  characteristics: string[];
  lifestyle: string;
  jobs: string;
  inhabitants: string;
  activities: string[];
  images: {
    main: string;
    gallery: string[];
  };
  facts: string[];
}