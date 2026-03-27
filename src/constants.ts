export const BUSINESS_INFO = {
  name: "Hanneke Tree Service",
  founded: 2005,
  owner: "Matt Hanneke",
  phone: "(314) 960-9797",
  email: "matthanneke@gmail.com",
  address: "6000 Duda Road, House Springs, Missouri",
  office: "4751 Music Ln, St. Louis, MO 63128",
  facebook: "https://www.facebook.com/profile.php?id=100063540852464",
  serviceArea: [
    "St. Louis County", "Kirkwood", "Webster", "Ladue", "Affton", 
    "Fenton", "Ballwin", "Manchester", "Arnold", "Eureka", 
    "Jefferson County"
  ]
};

export const SERVICES = [
  {
    id: "tree-removal",
    title: "Tree Removal",
    slug: "tree-removal",
    icon: "TreePine",
    description: "Safe and professional removal of hazardous or unwanted trees of any size.",
    shortDesc: "Dramatic tree falling shot (safe, professional)",
    image: "/images/tree-removal-truck.png",
    heroImage: "/images/tree-removal-log.png",
    features: ["Emergency Storm Response", "Fully Insured", "Precision Felling", "Complete Cleanup"]
  },
  {
    id: "tree-trimming",
    title: "Tree Trimming",
    slug: "tree-trimming",
    icon: "Scissors",
    description: "Expert pruning to enhance tree health, safety, and aesthetic appeal.",
    shortDesc: "Arborist in tree with professional gear",
    image: "/images/tree-removal-crane.png",
    heroImage: "/images/tree-removal-crane.png",
    features: ["Crown Thinning", "Deadwooding", "Structural Pruning", "Safety Clearances"]
  },
  {
    id: "stump-grinding",
    title: "Stump Grinding",
    slug: "stump-grinding",
    icon: "Zap",
    description: "Eliminate hazards and reclaim your yard with precision grinding technology.",
    shortDesc: "Action shot of stump grinder in operation",
    image: "https://hanneketreeservice.com/wp-content/uploads/2023/12/stumpgrinding.png",
    heroImage: "https://hanneketreeservice.com/wp-content/uploads/2023/12/stumpgrinding.png",
    features: ["Deep Grinding", "Pest Prevention", "Surface Leveling", "Root Removal"]
  },
  {
    id: "mulching",
    title: "Mulching",
    slug: "mulching",
    icon: "Leaf",
    description: "Premium mulch application for moisture retention and landscape beauty.",
    shortDesc: "Rich mulch being spread, fresh and vibrant",
    image: "https://hanneketreeservice.com/wp-content/uploads/2023/12/mulch.png",
    heroImage: "https://hanneketreeservice.com/wp-content/uploads/2024/01/Untitled-design-19.png",
    features: ["Moisture Retention", "Weed Suppression", "Soil Health", "Aesthetic Enhancement"]
  }
];

export const FAQS = [
  {
    question: "How much does tree removal cost?",
    answer: "Pricing depends on tree size, location, and complexity. We offer free on-site estimates with no obligation — the best way to get an accurate price is to give us a call."
  },
  {
    question: "Are you fully insured?",
    answer: "Yes, Hanneke Tree Service is fully insured for both liability and workers' compensation. We prioritize safety and protect your property at every step."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Absolutely. We provide 24/7 emergency storm response for fallen trees or hazardous limbs that threaten your home or safety."
  }
];
