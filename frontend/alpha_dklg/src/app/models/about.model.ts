export interface About {
  id?: number;
  fullName: string;
  title: string;
  location: string;
  profilePicture?: string;
  introduction: string;
  email: string;
  phone?: string;
  resume?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
} 