export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  id: number;
  email: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  preferredContactMethod?: string;
  availabilityHours?: string;
} 