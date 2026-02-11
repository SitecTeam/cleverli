/** Serializable service data passed from Astro to React components */
export type ServiceData = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string[];
};

/** Serializable sector data passed from Astro to React components */
export type SectorData = {
  id: number;
  title: string;
  description: string;
  icon: string;
  backgroundIcon: string;
  details: string[];
};

/** Serializable testimonial data passed from Astro to React components */
export type TestimonialData = {
  id: number;
  description: string;
  author: string;
  department?: string;
  image: string;
};

/** Serializable benefit data passed from Astro to React components */
export type BenefitData = {
  title: string;
  descriptionHtml: string;
  icon: string;
  order: number;
};

/** Serializable service process step data */
export type ServiceProcessData = {
  title: string;
  descriptionHtml: string;
  icon: string;
  order: number;
};

/** Serializable differential data */
export type DifferentialData = {
  id: number;
  text: string;
  icon: string;
};

/** Serializable logo data */
export type LogoItemData = {
  id: string;
  title: string;
  icon: string;
};

/** Serializable culture value */
export type CultureValueData = {
  id: string;
  text: string;
};
