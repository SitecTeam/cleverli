import Hospital from "../../svgs/partners/hospital.svg?url";
import Corporation from "../../svgs/partners/corpo.svg?url";
import Academia from "../../svgs/partners/academia.svg?url";
import Temple from "../../svgs/partners/temple.svg?url";
import VR from "../../svgs/partners/vr.svg?url";
import Safe from "../../svgs/partners/safe.svg?url";
import Weight from "../../svgs/partners/weight.svg?url";
import Windmill from "../../svgs/partners/windmill.svg?url";
import BgHospital from "../../svgs/sector/hospital.svg?url";
import BgCorporation from "../../svgs/sector/corporation.svg?url";
import BgAcademia from "../../svgs/sector/academia.svg?url";
import BgTemple from "../../svgs/sector/temple.svg?url";
import BgRocket from "../../svgs/sector/rocket.svg?url";
import BgCircle from "../../svgs/sector/circle.svg?url";
import BgWeight from "../../svgs/sector/weight.svg?url";
import BgDragon from "../../svgs/sector/dragon.svg?url";

export const sectorCardData = [
  {
    id: 1,
    title: "Healthcare & Pharmaceutical",
    description:
      "From patient safety to clinical protocols and medical device training, we support healthcare organizations in delivering accurate, compliant, and engaging e-learning. We understand the sensitivity, complexity, and regulatory standards involved.",
    icon: Hospital,
    backgroundIcon: BgHospital,
    details: [
      "Continuing Medical Education (CME)",
      "E-learning for nurses, physicians, and technicians",
      "Medical product onboarding",
      "Simulation & scenario-based modules",
    ],
  },
  {
    id: 2,
    title: "Corporate & Enterprise",
    description:
      "We build engaging e-learning experiences for businesses that need to onboard, upskill, or reskill employees across multiple departments and locations.",
    icon: Corporation,
    backgroundIcon: BgCorporation,
    details: [
      "HR onboarding & internal procedures",
      "Sales enablement & soft skills",
      "Leadership & management development",
      "Remote learning integration",
      "KPI-driven learning measurement",
    ],
  },
  {
    id: 3,
    title: "Education & Academia",
    description:
      "We collaborate with universities, schools, and educational organizations to support online learning initiatives, LMS content creation, and modern curriculum delivery.",
    icon: Academia,
    backgroundIcon: BgAcademia,
    details: [
      "Course digitization (PowerPoint, SCORM, video)",
      "Hybrid and blended learning formats",
      "Multilingual & inclusive education materials",
      "Academic research visualization",
      "EdTech content partnerships",
    ],
  },
  {
    id: 4,
    title: "Government & Public Sector",
    description:
      "We design solutions for government institutions, international organizations, and nonprofits, enabling education in areas such as civic engagement, institutional reform, and social services.",
    icon: Temple,
    backgroundIcon: BgTemple,
    details: [
      "Public awareness and training campaigns",
      "Learning for field staff",
      "Knowledge platforms for ministries and agencies",
      "Multilingual localization for wider access",
      "Reporting and impact tracking",
    ],
  },
  {
    id: 5,
    title: "IT & Digital Services",
    description:
      "We provide behind-the-scenes support to companies that need an experienced partner to build or improve their product's learning layer, fast and at scale.",
    icon: VR,
    backgroundIcon: BgRocket,
    details: [
      "White-label course creation",
      "Visual design and gamification",
      "Onboarding modules and learning paths",
      "API-ready SCORM/xAPI packaging",
      "Agile collaboration with product teams",
    ],
  },
  {
    id: 6,
    title: "Finance, Banking & Insurance",
    description:
      "We support institutions where knowledge is critical to both performance and risk reduction. Our solutions help teams stay compliant while improving real-world readiness.",
    icon: Safe,
    backgroundIcon: BgCircle,
    details: [
      "Regulatory and compliance training",
      "Product knowledge for sales and support",
      "Secure data handling and ethics",
      "Performance-focused learning analytics",
      "Consistent updates for evolving regulations",
    ],
  },
  {
    id: 7,
    title: "Legal & Regulatory",
    description:
      "We support legal and regulated teams where accuracy, consistency, and auditability are essential. Our learning solutions help organizations reduce compliance risk while keeping policies and procedures clear, usable, and up to date.",
    icon: Weight,
    backgroundIcon: BgWeight,
    details: [
      "Regulatory and compliance training (role-based)",
      "Policy and procedure enablement (standards, SOPs, guidelines)",
      "Ethics, conduct, and data privacy training",
      "Scenario-based decision making (case-driven learning)",
      "Version control and rapid updates for changing regulations",
    ],
  },
  {
    id: 8,
    title: "Energy & Industrial Operations",
    description:
      "We support energy, industrial operations, and manufacturing organizations where safety, reliability, and operational readiness are critical. Our learning solutions turn complex technical processes into practical, accessible training that improves performance on the job.",
    icon: Windmill,
    backgroundIcon: BgDragon,
    details: [
      "Safety and compliance training (HSE, risk, incident prevention)",
      "Operational and maintenance training (processes, SOPs, equipment)",
      "Technical onboarding and role readiness programs",
      "Procedure walkthroughs and simulation-style learning",
      "Performance support materials (job aids, microlearning, refreshers)",
    ],
  },
];
