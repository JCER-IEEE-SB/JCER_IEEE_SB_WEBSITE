export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  registrationLink?: string;
}

export interface ExecomMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedIn?: string;
  github?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}