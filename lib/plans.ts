// lib/plans.ts
export type Plan = {
  url?: string;
  name: string;
  price: string;
  productId: string;
  discount?: string;
  features: string[];
  limits: PlanLimits;
};
export type PlanLimits = {
  project: number | "unlimited";
  roadmap: number | "unlimited";
  mvp: number | "unlimited";
  buildlog: number | "unlimited";
};

export const FreePlanId = "111111";
const plans = [
  {
    name: "Explore",
    price: "Free",
    productId: "111111",
    features: ["1 Project", "1 Roadmap", "1 MVP", "2 Buildlogs"],
    limits: {
      project: 1,
      roadmap: 1,
      mvp: 1,
      buildlog: 2,
    },
  },
  {
    name: "Founder’s Pass",
    price: "₹999/month",
    productId: "517014",
    features: ["10 Projects", "3 Roadmaps", "2 MVPs", "5 Buildlogs"],
    limits: {
      project: 10,
      roadmap: 5,
      mvp: 5,
      buildlog: 10,
    },
    url: "https://test-4frefd.lemonsqueezy.com/buy/ec83d2a0-df3b-499d-9e45-bfaba51d61b0",
  },
  {
    name: "Builder",
    price: "₹1,999/month",
    discount: "40% off",
    productId: "517015",
    features: ["unlimited Projects", "10 Roadmaps", "10 MVPs", "20 Buildlogs"],
    limits: {
      project: "unlimited",
      roadmap: 20,
      mvp: 15,
      buildlog: 30,
    },
    url: "https://test-4frefd.lemonsqueezy.com/buy/ec83d2a0-df3b-499d-9e45-bfaba51d61b0",
  },
  {
    name: "Founder+",
    price: "₹3,999/month",
    discount: "50% off",
    productId: "517016",
    features: ["unlimited Projects", "50 Roadmaps", "30 MVPs", "50 Buildlogs"],
    limits: {
      project: "unlimited",
      roadmap: 50,
      mvp: 30,
      buildlog: 50,
    },
    url: "https://test-4frefd.lemonsqueezy.com/buy/ec83d2a0-df3b-499d-9e45-bfaba51d61b0",
  },
];

export default plans;
