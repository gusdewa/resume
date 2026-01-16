export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Header {
  name: string;
  title: string;
  contact: ContactInfo;
}

export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  description?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  location: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface ResumeVariant {
  metadata: {
    variantName: string;
    title: string;
    description: string;
  };
  header: Header;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  certifications?: Certification[];
}

export type PartialResumeVariant = {
  [K in keyof ResumeVariant]?: K extends 'metadata' | 'header' | 'experience' | 'education' | 'skills' | 'certifications'
    ? ResumeVariant[K] extends Array<infer U>
      ? Array<Partial<U>>
      : Partial<ResumeVariant[K]>
    : ResumeVariant[K];
};
